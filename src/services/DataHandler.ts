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

        return new Promise((resolve, reject) => {
            const data: CafeInfoDto = {
                baseCurrency: baseCurrency,
                totalAllocation: totalAllocation,
                stakeAllocation: stakeAllocation,
                terminationEvents: terminationEvents,
                minimumInvestment: minimumInvestment,
                initialReserve: initialReserve,
                initialValuation: initialValuation,
                governingRights: govRights
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

    getUserTransactionData(): Promise<Array<UserTransactionDto>> {
        return new Promise((resolve, reject) => {
            const data: Array<UserTransactionDto> = [
                {
                    date: "2021-07-29 12:05:33.574+00",
                    tezAmount: 2000,
                    tokenAmount: 1,
                    transactionType: TransactionType.Funding
                },
                {
                    date: "2021-02-13 12:05:33.574+00",
                    tezAmount: 100,
                    tokenAmount: 2,
                    transactionType: TransactionType.Withdrawal
                },
                {
                    date: "2021-05-21 12:05:33.574+00",
                    tezAmount: 5000,
                    tokenAmount: 3,
                    transactionType: TransactionType.Funding
                },
            ]

            resolve(data);
        });
    }
}
