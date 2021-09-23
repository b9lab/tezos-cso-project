import { 
    CafeInfoDto, 
    CompanyValuationDto, 
    FundDto, 
    FundTokenInfoDto, 
    InvestmentNumbersDto, 
    TransactionType, 
    UserInvestmentDto, 
    UserTokenInfoDto, 
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

/**
 * Handles the tezos data exposed by the chain wrapper and the interaction with the contract wrapper
 */
class DataHandler {

    /**
     * Gets the general investment numbers
     */
    async getInvestmentNumbers(): Promise<InvestmentNumbersDto> {
        const start = new Date(process.env.DEPLOYMENT_DATE || "2021-07-21T14:02:43Z");
        const end = new Date();
        const steps = 30;

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
            phase,
            priceHistory
        ] = await Promise.all([
            chain.companyName(storage), 
            chain.buyPrice(storage),
            chain.sellPrice(),
            chain.mfg(storage),
            chain.totalInvestments(storage),
            chain.totalInvestors(storage),
            chain.totalTokens(storage),
            chain.reserveAmount(),
            chain.sellSlope(storage),
            chain.buySlope(storage),
            chain.unlockingDate(storage),
            chain.burnedTokens(storage),
            chain.phase(storage),
            chain.priceHistory(start, end, steps)
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
            isMFGReached: !!+phase,
            prices: priceHistory
        };
    }

    /**
     * Gets the company valuation
     */
    async getCompanyValuation(): Promise<CompanyValuationDto> {
        const companyValuation = await chain.companyValuation();

        return {
            valuation: +companyValuation
        };
    }

    /**
     * Gets the CAFE parameters
     */
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

    /**
     * Gets the investment data relative to a specific user
     * @param address User's wallet address.
     */
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
            chain.sellPrice(),
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

    /**
     * Gets the token informations relative to the funding
     * @param address User's wallet address.
     */
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

    /**
     * Performs a transaction interacting with the contract wrapper to buy some tokens
     * @param data contains the amount of tez to use and the account address
     * @returns a promise that resolves with an error if something goes wrong or the hash of the executed transaction if successful
     */
    fund(data: FundDto): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            contract.buy(data.amount).then((result: string) => {
                if (result.includes("_ERROR")) {
                    reject(this._parseError(result));
                } else {
                    resolve(result.replace("Operation injected: ", ""));
                }
            }).catch((error: any) => {
                reject(new Error(error));
            });
        });
    }

    /**
     * Gets the token informations relative to the withdrawal
     * @param address User's wallet address.
     */
    async getWithdrawTokenInfo(address: string): Promise<WithdrawTokenInfoDto> {
        const userData = chain.user(address);
        const storage = await chain.storage();
        const [
            tokenSellPrice,
            tokensOwned, 
            tezCount, 
            lockPeriod
        ] = await Promise.all([
            chain.sellPrice(),
            userData.tokens(),
            userData.tez(),
            chain.unlockingDate(storage)
        ]);
        
        return {
            tokenSellPrice: +tokenSellPrice,
            tokensOwned: +tokensOwned,
            tezCount: +tezCount,
            lockPeriod: lockPeriod
        };
    }

    /**
     * Performs a transaction interacting with the contract wrapper to sell some tokens
     * @param data contains the amount of tokens to sell and the account address
     * @returns a promise that resolves with an error if something goes wrong or the hash of the executed transaction if successful
     */
    withdraw(data: WithdrawDto): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            contract.sell(data.amount).then((result: string) => {
                if (result.includes("_ERROR")) {
                    reject(this._parseError(result));
                } else {
                    resolve(result.replace("Operation injected: ", ""));
                }
            }).catch((error: any) => {
                reject(new Error(error));
            });
        });
    }

    /**
     * Gets the token information relative to the user
     * @param address User's wallet address.
     */
    async getUserTokenInfo(address: string): Promise<UserTokenInfoDto> {
        const userData = chain.user(address);
        const [
            tokenBuyPrice,
            tokensOwned
        ] = await Promise.all([
            chain.buyPrice(),
            userData.tokens()
        ]);

        return {
            tokenBuyPrice: +tokenBuyPrice,
            tokensOwned: +tokensOwned
        }
    }

    /**
     * Gets the list of transactions (fund and withdraws) performed by the user
     * @param address User's wallet address.
     */
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

    /**
     * @hidden
     */
    _parseError(message: string) {
        let error = null;

        if (message.includes("ABORTED_ERROR")) {
            error = new Error(message.replace("[ABORTED_ERROR]:", ""));
        } else if (message.includes("TRANSACTION_INVALID_ERROR")) {
            error = new Error(message.replace("[TRANSACTION_INVALID_ERROR]:", ""));
        } else {
            error = new Error(message);
        }

        return error;
    }
}

export default DataHandler;
