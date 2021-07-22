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
            burnedTokensCount
        ] = await Promise.all([
            chain.companyName(), 
            chain.buyPrice(),
            chain.sellPrice(),
            chain.mfg(),
            chain.totalInvestments(),
            chain.totalInvestors(),
            chain.totalTokens(),
            chain.reserveAmount(),
            chain.sellSlope(),
            chain.buySlope(),
            chain.unlockingDate(),
            chain.burnedTokens()
        ]);

        return {
            companyName: companyName,
            tokenBuyPrice: buyPrice,
            tokenSellPrice: sellPrice,
            minimumFundingGoal: minimumFundingGoal,
            unlockingDate: unlockingDate,
            totalInvestment: totalInvestments,
            investorsCount: investorsCount,
            tokensCount: totalTokens,
            burnedTokensCount: burnedTokensCount,
            reserveAmount: reserveAmount,
            buySlope: buySlope,
            sellSlope: sellSlope
        };
    }

    async getCompanyValuation(): Promise<CompanyValuationDto> {
        const companyValuation = await chain.companyValuation();

        return new Promise((resolve, reject) => {
            const data: CompanyValuationDto = {
                valuation: companyValuation
            };

            resolve(data);
        });
    }

    // CAFE details

    async getCafeParameters(): Promise<CafeInfoDto> {
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
            sellSlope 
        ] = await Promise.all([
            chain.govRights(), 
            chain.baseCurrency(),
            chain.totalAllocation(),
            chain.stakeAllocation(),
            chain.terminationEvents(),
            chain.initialReserve(),
            chain.companyValuation(),
            chain.i(),
            chain.d(),
            chain.mfg(),
            chain.buySlope(),
            chain.sellSlope()
        ]);
        const minimumInvestment = 0; // todo

        return {
            baseCurrency: baseCurrency,
            totalAllocation: totalAllocation,
            stakeAllocation: stakeAllocation,
            terminationEvents: terminationEvents,
            minimumInvestment: minimumInvestment,
            initialReserve: initialReserve,
            initialValuation: initialValuation,
            governingRights: govRights,
            reservePercentage: reservePercentage,
            retainedRevenuePercentage: retainedRevenuePercentage,
            minimumFundingGoal: minimumFundingGoal,
            buySlope: buySlope,
            sellSlope: sellSlope
        };
    }

    // Personal Investment Info

    async getUserInvestmentData(address: string): Promise<UserInvestmentDto> {
        const userData = chain.user(address);
        const [
            tezInvested, 
            tokensOwned, 
            tokenBuyPrice,
            tokenSellPrice
        ] = await Promise.all([
            userData.tezInvested(),
            userData.tokens(),
            chain.buyPrice(),
            chain.sellPrice()
        ]);

        return {
            tezInvested: tezInvested,
            tokensOwned: tokensOwned,
            tokenBuyPrice: tokenBuyPrice,
            tokenSellPrice: tokenSellPrice
        };
    }

    // Fund

    async getFundTokenInfo(address: string): Promise<FundTokenInfoDto> {
        const userData = chain.user(address);
        const [
            tezCount, 
            tokensOwned, 
            tokenBuyPrice,
            lockPeriod
        ] = await Promise.all([
            userData.tez(),
            userData.tokens(),
            chain.buyPrice(),
            chain.unlockingDate()
        ]);
        
        return {
            tokenBuyPrice: tokenBuyPrice,
            tokensOwned: tokensOwned,
            tezCount: tezCount,
            lockPeriod: lockPeriod
        };
    }

    fund(data: FundDto): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            contract.buy(data.amount).then((result: string) => {
                if (result.includes("TRANSACTION_INVALID_ERROR")) {
                    reject(new Error("Transaction failed"));
                } else {
                    resolve(result.replace("Operation injected: ", ""));
                }
            });
        });
    }

    // Withdraw

    async getWithdrawTokenInfo(address: string): Promise<WithdrawTokenInfoDto> {
        const userData = chain.user(address);
        const [
            tokenSellPrice,
            tokensOwned, 
            reserveAmount, 
            lockPeriod
        ] = await Promise.all([
            chain.sellPrice(),
            userData.tokens(),
            chain.reserveAmount(),
            chain.unlockingDate()
        ]);
        
        return {
            tokenSellPrice: tokenSellPrice,
            tokensOwned: tokensOwned,
            reserveAmount: reserveAmount,
            lockPeriod: lockPeriod
        };
    }

    withdraw(data: WithdrawDto): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            contract.sell(data.amount).then((result: string) => {
                console.log(result)
                if (result.includes("TRANSACTION_INVALID_ERROR")) {
                    reject(new Error("Transaction failed"));
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
                tezAmount: transaction.amount,
                tokenAmount: transaction.tokens,
                transactionType: TransactionType.Funding
            };
        });

        const withdrawsMapped: Array<UserTransactionDto> = withdrawData.map((transaction: Transaction) => {
            return {
                hash: transaction.hash,
                date: transaction.timestamp,
                tezAmount: transaction.amount,
                tokenAmount: transaction.tokens,
                transactionType: TransactionType.Withdrawal
            };
        });

        return data.concat(fundsMapped, withdrawsMapped);
    }
}
