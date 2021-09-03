import { 
    CafeInfoDto, 
    CompanyValuationDto, 
    FundDto, 
    FundTokenInfoDto, 
    InvestmentNumbersDto, 
    TransactionType, 
    UserInvestmentDto, 
    UserTransactionDto, 
    WithdrawDto, 
    WithdrawTokenInfoDto 
} from "../utils/dtos";
import { contract, chain } from '../../tezos-app-project';

interface Transaction {
    timestamp: string,
    amount: number,
    tokens: number,
    hash: string
}

export default class DataHandler {

    // General Investment Info
    
    async getInvestmentNumbers(): Promise<InvestmentNumbersDto> {
        const storage = await chain.storage();
        const [
            companyName, 
            buyPrice, 
            sellPrice, 
            minimumFundingGoal, 
            totalInvestments, 
            investorsCount, 
            totalTokens, 
            reserveAmount, 
            sellSlope,
            buySlope, 
            unlockingDate,
            burnedTokensCount,
            phase
        ] = await Promise.all([
            chain.companyName(storage), 
            chain.buyPrice(storage),
            chain.sellPrice(storage),
            chain.mfg(storage),
            chain.totalInvestments(storage),
            chain.totalInvestors(storage),
            chain.totalTokens(storage),
            chain.reserveAmount(),
            chain.sellSlope(storage),
            chain.buySlope(storage),
            chain.unlockingDate(storage),
            chain.burnedTokens(storage),
            chain.phase(storage)
        ]);

        return {
            companyName: companyName,
            tokenBuyPrice: +buyPrice,
            tokenSellPrice: +sellPrice,
            minimumFundingGoal: +minimumFundingGoal,
            unlockingDate: unlockingDate,
            totalInvestment: +totalInvestments,
            investorsCount: +investorsCount,
            tokensCount: +totalTokens,
            burnedTokensCount: +burnedTokensCount,
            reserveAmount: +reserveAmount,
            buySlope: +buySlope,
            sellSlope: +sellSlope,
            isMFGReached: !!+phase
        };
    }

    async getCompanyValuation(): Promise<CompanyValuationDto> {
        const companyValuation = await chain.companyValuation();

        return {
            valuation: +companyValuation
        };
    }

    // CAFE details

    async getCafeParameters(): Promise<CafeInfoDto> {
        const storage = await chain.storage();
        const [
            govRights, 
            baseCurrency, 
            totalAllocation, 
            stakeAllocation, 
            terminationEvents, 
            initialReserve, 
            initialValuation, 
            reservePercentage, 
            retainedRevenuePercentage, 
            minimumFundingGoal, 
            buySlope, 
            sellSlope,
            minimumInvestment
        ] = await Promise.all([
            chain.govRights(storage), 
            chain.baseCurrency(storage),
            chain.totalAllocation(storage),
            chain.stakeAllocation(storage),
            chain.terminationEvents(storage),
            chain.initialReserve(),
            chain.companyValuation(storage),
            chain.i(storage),
            chain.d(storage),
            chain.mfg(storage),
            chain.buySlope(storage),
            chain.sellSlope(storage),
            chain.minimumInvestment(storage)
        ]);

        return {
            baseCurrency: baseCurrency,
            totalAllocation: +totalAllocation,
            stakeAllocation: +stakeAllocation,
            terminationEvents: terminationEvents,
            minimumInvestment: +minimumInvestment,
            initialReserve: +initialReserve,
            initialValuation: +initialValuation,
            governingRights: govRights,
            reservePercentage: +reservePercentage,
            retainedRevenuePercentage: +retainedRevenuePercentage,
            minimumFundingGoal: +minimumFundingGoal,
            buySlope: +buySlope,
            sellSlope: +sellSlope
        };
    }

    // Personal Investment Info

    async getUserInvestmentData(address: string): Promise<UserInvestmentDto> {
        const userData = chain.user(address);
        const storage = await chain.storage();
        const [
            tezInvested, 
            tokensOwned, 
            tokenBuyPrice,
            tokenSellPrice,
            phase
        ] = await Promise.all([
            userData.tezInvested(),
            userData.tokens(),
            chain.buyPrice(storage),
            chain.sellPrice(storage),
            chain.phase(storage)
        ]);

        return {
            tezInvested: +tezInvested,
            tokensOwned: +tokensOwned,
            tokenBuyPrice: +tokenBuyPrice,
            tokenSellPrice: +tokenSellPrice,
            isMFGReached: !!+phase
        };
    }

    // Fund

    async getFundTokenInfo(address: string): Promise<FundTokenInfoDto> {
        const userData = chain.user(address);
        const storage = await chain.storage();
        const [
            tezCount, 
            tokensOwned, 
            tokenBuyPrice,
            lockPeriod
        ] = await Promise.all([
            userData.tez(),
            userData.tokens(),
            chain.buyPrice(storage),
            chain.unlockingDate(storage)
        ]);
        
        return {
            tokenBuyPrice: +tokenBuyPrice,
            tokensOwned: +tokensOwned,
            tezCount: +tezCount,
            lockPeriod: lockPeriod
        };
    }

    fund(data: FundDto): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            contract.buy(data.amount).then((result: string) => {
                if (result.includes("_ERROR")) {
                    reject(new Error(result));
                } else {
                    resolve(result.replace("Operation injected: ", ""));
                }
            });
        });
    }

    // Withdraw

    async getWithdrawTokenInfo(address: string): Promise<WithdrawTokenInfoDto> {
        const userData = chain.user(address);
        const storage = await chain.storage();
        const [
            tokenSellPrice,
            tokensOwned, 
            reserveAmount, 
            lockPeriod
        ] = await Promise.all([
            chain.sellPrice(storage),
            userData.tokens(),
            chain.reserveAmount(),
            chain.unlockingDate(storage)
        ]);
        
        return {
            tokenSellPrice: +tokenSellPrice,
            tokensOwned: +tokensOwned,
            reserveAmount: +reserveAmount,
            lockPeriod: lockPeriod
        };
    }

    withdraw(data: WithdrawDto): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            contract.sell(data.amount).then((result: string) => {
                if (result.includes("_ERROR")) {
                    reject(new Error(result));
                } else {
                    resolve(result.replace("Operation injected: ", ""));
                }
            });
        });
    }

    // Transactions

    async getUserTransactionData(address: string): Promise<Array<UserTransactionDto>> {
        const data: Array<UserTransactionDto> = [];
        const userData = chain.user(address);

        const [
            fundData,
            withdrawData
        ] = await Promise.all([
            userData.bought(),
            userData.sold()
        ]);

        const fundsMapped: Array<UserTransactionDto> = fundData.map((transaction: Transaction) => {
            return {
                hash: transaction.hash,
                date: transaction.timestamp,
                tezAmount: +transaction.amount,
                tokenAmount: +transaction.tokens,
                transactionType: TransactionType.Funding
            };
        });

        const withdrawsMapped: Array<UserTransactionDto> = withdrawData.map((transaction: Transaction) => {
            return {
                hash: transaction.hash,
                date: transaction.timestamp,
                tezAmount: +transaction.amount,
                tokenAmount: +transaction.tokens,
                transactionType: TransactionType.Withdrawal
            };
        });

        return data.concat(fundsMapped, withdrawsMapped);
    }
}
