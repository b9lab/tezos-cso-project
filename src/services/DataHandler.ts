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
        const minimumFundingGoal = await chain.sellPrice();
        const totalInvestments = await chain.totalInvestments();
        const totalInvestors = await chain.totalInvestors();
        const totalTokens = await chain.totalTokens();
        const reserveAmount = await chain.reserveAmount();


        return new Promise((resolve, reject) => {
            const data: InvestmentNumbersDto = {
                companyName: companyName,
                tokenBuyPrice: buyPrice,
                tokenSellPrice: sellPrice,
                minimumFundingGoal: 125000000,
                unlockingDate: "2021-07-30 12:05:33.574+00",
                totalInvestment: totalInvestments,
                investorsCount: totalInvestors,
                tokensCount: totalTokens,
                burnedTokensCount: 0,
                reserveAmount: reserveAmount,
                buySlope: 120,
                sellSlope: 125
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

    getCafeParameters(): Promise<CafeInfoDto> {
        return new Promise((resolve, reject) => {
            const data: CafeInfoDto = {
                baseCurrency: "USD",
                totalAllocation: 600000,
                stakeAllocation: 100000,
                terminationEvents: ["event 1", "event 2"],
                minimumInvestment: 1000,
                initialReserve: 120000,
                initialValuation: 10000,
                governingRights: "gov rights"
            }

            resolve(data);
        });
    }

    // Personal Investment Info

    getUserInvestmentData(): Promise<UserInvestmentDto> {
        return new Promise((resolve, reject) => {
            const data: UserInvestmentDto = {
                tezInvested: 2000,
                tokensOwned: 2,
                tokenBuyPrice: 1000,
                tokenSellPrice: 990
            };

            resolve(data);
        });
    }

    // Fund

    getFundTokenInfo(): Promise<FundTokenInfoDto> {
        return new Promise((resolve, reject) => {
            const data: FundTokenInfoDto = {
                tokenBuyPrice: 1000,
                lockPeriod: "2021-07-30 12:05:33.574+00"
            };

            resolve(data);
        });
    }

    fund(data: FundDto) {
        contract.buy(data.amount);
    }

    // Withdraw

    getWithdrawTokenInfo(): Promise<WithdrawTokenInfoDto> {
        return new Promise((resolve, reject) => {
            const data: WithdrawTokenInfoDto = {
                tokenSellPrice: 990,
                tokensOwned: 2,
                lockPeriod: "2021-07-30 12:05:33.574+00"
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
