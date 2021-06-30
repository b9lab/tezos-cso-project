interface InvestmentNumbersDto {
    totalInvestment: string,
    investorsCount: number,
    tokensCount: number,
    unlockingDate: Date
}

interface CompanyValuationDto {
    valuation: string
}

interface UserInvestmentDto {
    tezInvested: number,
    tokensOwned: number,
    ownershipAmount: number
}

interface FundTokenInfoDto {
    value: string,
    lockPeriod: Date
}

interface WithdrawTokenInfoDto {
    value: string,
    tokensOwned: number
}

interface FundDto {
    amount: number
}

interface WithdrawDto {
    amount: number
}

interface UserTransactionDto {
    date: Date,
    tezAmount: number,
    tokenAmount: number
}

export default class DataHandler {

    // General Investment Info
    
    getInvestmentNumbers(): Promise<InvestmentNumbersDto> {
        return new Promise((resolve, reject) => {
            const data: InvestmentNumbersDto = {
                totalInvestment: '$2,000',
                investorsCount: 238,
                tokensCount: 37,
                unlockingDate: new Date("2021-07-30 12:05:33.574+00")
            };

            resolve(data);
        });
    }

    getCompanyValuation(): Promise<CompanyValuationDto> {
        return new Promise((resolve, reject) => {
            const data: CompanyValuationDto = {
                valuation: "company valuation test"
            };

            resolve(data);
        });
    }

    // CAFE details

    getCafeParameters(): Promise<Set<number>> {
        return new Promise((resolve, reject) => {
            const data = new Set([1, 2, 3, 4, 5, 6, 7]);

            resolve(data);
        });
    }

    // Personal Investment Info

    getUserInvestmentData(): Promise<UserInvestmentDto> {
        return new Promise((resolve, reject) => {
            const data: UserInvestmentDto = {
                tezInvested: 3.27,
                tokensOwned: 2,
                ownershipAmount: 12.3
            };

            resolve(data);
        });
    }

    // Fund

    getFundTokenInfo(): Promise<FundTokenInfoDto> {
        return new Promise((resolve, reject) => {
            const data: FundTokenInfoDto = {
                value: 'TEZ',
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
                value: 'TEZ',
                tokensOwned: 2
            };

            resolve(data);
        });
    }

    withdraw(data: WithdrawDto) {
        console.log(data);
    }

    // Transactions

    getUserTransactionData(): Promise<UserTransactionDto> {
        return new Promise((resolve, reject) => {
            const data: UserTransactionDto = {
                date: new Date("2021-07-30 12:05:33.574+00"),
                tezAmount: 12,
                tokenAmount: 27
            };

            resolve(data);
        });
    }
}
