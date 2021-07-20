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
    amount: number
}

export default class DataHandler {

    // General Investment Info
    
    async getInvestmentNumbers(): Promise<InvestmentNumbersDto> {
        const companyName = await chain.companyName();
        const buyPrice = await chain.buyPrice();
        const sellPrice = await chain.sellPrice();
        const minimumFundingGoal = await chain.mfg();
        const totalInvestments = await chain.totalInvestments();
        const investorsCount = await chain.totalInvestors();
        const totalTokens = await chain.totalTokens();
        const reserveAmount = await chain.reserveAmount();
        const sellSlope = await chain.sellSlope();
        const buySlope = await chain.buySlope();
        const unlockingDate = await chain.unlockingDate();
        const burnedTokensCount = await chain.burnedTokens();


        return new Promise((resolve, reject) => {
            const data: InvestmentNumbersDto = {
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

            resolve(data);
        });
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
        const govRights = await chain.govRights();
        const baseCurrency = await chain.baseCurrency();
        const totalAllocation = await chain.totalAllocation();
        const stakeAllocation = await chain.stakeAllocation();
        const terminationEvents = await chain.terminationEvents();
        const initialReserve = await chain.initialReserve();
        const minimumInvestment = 0; // todo
        const initialValuation = await chain.companyValuation();
        const reservePercentage = await chain.i();
        const retainedRevenuePercentage = await chain.d();
        const minimumFundingGoal = await chain.mfg();
        const buySlope = await chain.buySlope();
        const sellSlope = await chain.sellSlope();

        return new Promise((resolve, reject) => {
            const data: CafeInfoDto = {
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
            }

            resolve(data);
        });
    }

    // Personal Investment Info

    async getUserInvestmentData(address: string): Promise<UserInvestmentDto> {
        const userData = await chain.user(address);
        const tezInvested = await userData.tezInvested();
        const tokensOwned = await userData.tokens();
        const tokenBuyPrice = await chain.buyPrice();
        const tokenSellPrice = await chain.sellPrice();

        return new Promise((resolve, reject) => {
            const data: UserInvestmentDto = {
                tezInvested: tezInvested,
                tokensOwned: tokensOwned,
                tokenBuyPrice: tokenBuyPrice,
                tokenSellPrice: tokenSellPrice
            };

            resolve(data);
        });
    }

    // Fund

    async getFundTokenInfo(address: string): Promise<FundTokenInfoDto> {
        const tokenBuyPrice = await chain.buyPrice();
        const tokensOwned = await chain.user(address).tokens();
        const lockPeriod = await chain.unlockingDate();
        const tezCount = await chain.user(address).tez();
        
        return new Promise((resolve, reject) => {
            const data: FundTokenInfoDto = {
                tokenBuyPrice: tokenBuyPrice,
                tokensOwned: tokensOwned,
                tezCount: tezCount,
                lockPeriod: lockPeriod
            };

            resolve(data);
        });
    }

    fund(data: FundDto) {
        contract.buy(data.amount);
    }

    // Withdraw

    async getWithdrawTokenInfo(address: string): Promise<WithdrawTokenInfoDto> {
        const tokenSellPrice = await chain.sellPrice();
        const tokensOwned = await chain.user(address).tokens();
        const reserveAmount = await chain.reserveAmount();
        const lockPeriod = await chain.unlockingDate();
        
        return new Promise((resolve, reject) => {
            const data: WithdrawTokenInfoDto = {
                tokenSellPrice: tokenSellPrice,
                tokensOwned: tokensOwned,
                reserveAmount: reserveAmount,
                lockPeriod: lockPeriod
            };

            resolve(data);
        });
    }

    withdraw(data: WithdrawDto) {
        contract.sell(data.amount);
    }

    // Transactions

    async getUserTransactionData(address: string): Promise<Array<UserTransactionDto>> {
        const data: Array<UserTransactionDto> = [];
        const user = await chain.user(address);
        const fundData: Array<Transaction> = await user.buyed();
        const withdrawData: Array<Transaction> = await user.selled();

        const fundsMapped: Array<UserTransactionDto> = fundData.map((transaction: Transaction) => {
            return {
                date: transaction.timestamp,
                tezAmount: transaction.amount,
                tokenAmount: 1,
                transactionType: TransactionType.Funding
            };
        });

        const withdrawsMapped: Array<UserTransactionDto> = withdrawData.map((transaction: Transaction) => {
            return {
                date: transaction.timestamp,
                tezAmount: transaction.amount,
                tokenAmount: 1,
                transactionType: TransactionType.Withdrawal
            };
        });

        return new Promise((resolve, reject) => {
            resolve(data.concat(fundsMapped, withdrawsMapped));
        });
    }
}
