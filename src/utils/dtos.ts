export interface InvestmentNumbersDto {
    organizationInfo: string,
    tokenBuyPrice: number, // TEZ
    tokenSellPrice: number,
    minimumFundingGoal: number, // TEZ
    unlockingDate: string,
    totalInvestment: number, // TEZ
    investorsCount: number,
    tokensCount: number,
    burnedTokensCount: number,
    buySlope: number, // percentage/factor
    sellSlope: number // percentage/factor
}

export interface CafeInfoDto {
    baseCurrency: string,
    totalAllocation: number,
    stakeAllocation: number,
    terminationEvents: Array<string>,
    minimumInvestment: number,
    initialReserve: number,
    initialValuation: number,
    governingRights: string
}

export interface CompanyValuationDto {
    valuation: number // TEZ
}

export interface UserInvestmentDto {
    tezInvested: number,
    tokensOwned: number,
    tokenBuyPrice: number,
    tokenSellPrice: number,
}

export interface FundTokenInfoDto {
    tokenBuyPrice: number,
    lockPeriod: string
}

export interface WithdrawTokenInfoDto {
    tokenSellPrice: number,
    tokensOwned: number,
    lockPeriod: string
}

export interface FundDto {
    amount: number,
    accountAddress: string
}

export interface WithdrawDto {
    amount: number,
    accountAddress: string
}

export enum TransactionType {
    Funding = 0,
    Withdrawal = 1
}

export interface UserTransactionDto {
    date: string,
    tezAmount: number,
    tokenAmount: number,
    transactionType: TransactionType
}