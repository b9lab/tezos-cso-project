interface InvestmentNumbersDto {
    organizationInfo: string,
    tokenBuyPrice: number, // TEZ
    tokenSellPrice: number,
    minimumFundingGoal: number, // TEZ
    unlockingDate: Date,
    totalInvestment: number, // TEZ
    investorsCount: number,
    tokensCount: number,
    burnedTokensCount: number,
    buySlope: number, // percentage/factor
    sellSlope: number // percentage/factor
}

interface CafeInfoDto {
    baseCurrency: string,
    totalAllocation: number,
    stakeAllocation: number,
    terminationEvents: Array<string>,
    minimumInvestment: number,
    initialReserve: number,
    initialValuation: number,
    governingRights: string
}

interface CompanyValuationDto {
    valuation: number // TEZ
}

interface UserInvestmentDto {
    tezInvested: number,
    tokensOwned: number,
    tokenBuyPrice: number,
    tokenSellPrice: number,
}

interface FundTokenInfoDto {
    tokenBuyPrice: number,
    lockPeriod: Date
}

interface WithdrawTokenInfoDto {
    tokenSellPrice: number,
    tokensOwned: number,
    lockPeriod: Date
}

interface FundDto {
    amount: number,
    accountAddress: string
}

interface WithdrawDto {
    amount: number,
    accountAddress: string
}

enum TransactionType {
    Funding = 0,
    Withdrawal = 1
}

interface UserTransactionDto {
    date: Date,
    tezAmount: number,
    tokenAmount: number,
    transactionType: TransactionType
}

export default class DataHandler {

    // General Investment Info
    
    getInvestmentNumbers(): Promise<InvestmentNumbersDto> {
        return new Promise((resolve, reject) => {
            const data: InvestmentNumbersDto = {
                organizationInfo: "Company Info",
                tokenBuyPrice: 1000,
                tokenSellPrice: 990,
                minimumFundingGoal: 125000000,
                unlockingDate: new Date("2021-07-30 12:05:33.574+00"),
                totalInvestment: 500000,
                investorsCount: 5,
                tokensCount: 500,
                burnedTokensCount: 0,
                buySlope: 120,
                sellSlope: 125
            };

            resolve(data);
        });
    }

    getCompanyValuation(): Promise<CompanyValuationDto> {
        return new Promise((resolve, reject) => {
            const data: CompanyValuationDto = {
                valuation: 500000
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
                lockPeriod: new Date("2021-07-30 12:05:33.574+00")
            };

            resolve(data);
        });
    }

    fund(data: FundDto) {
        console.log(data);
    }

    // Withdraw

    getWithdrawTokenInfo(): Promise<WithdrawTokenInfoDto> {
        return new Promise((resolve, reject) => {
            const data: WithdrawTokenInfoDto = {
                tokenSellPrice: 990,
                tokensOwned: 2,
                lockPeriod: new Date("2021-07-30 12:05:33.574+00")
            };

            resolve(data);
        });
    }

    withdraw(data: WithdrawDto) {
        console.log(data);
    }

    // Transactions

    getUserTransactionData(): Promise<Array<UserTransactionDto>> {
        return new Promise((resolve, reject) => {
            const data: Array<UserTransactionDto> = [
                {
                    date: new Date("2021-07-29 12:05:33.574+00"),
                    tezAmount: 2000,
                    tokenAmount: 1,
                    transactionType: TransactionType.Funding
                }
            ]

            resolve(data);
        });
    }
}
