import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import DataHandler from '../src/services/DataHandler';

process.env.NODE_ENV = 'test';

chai.use(chaiAsPromised);

const dataHandler = new DataHandler();
const userAddress = process.env.TEST_ACCOUNT_ADDRESS || "tz1Nr3fddys26a4VbmQja9JGKfqLpeJnPQJY";

describe('Data handler tests', () => {

    describe('Queries tests', () => {

        it('should get the investment numbers', async () => {
            await expect(dataHandler.getInvestmentNumbers()).to.be.fulfilled.then(data => {
                expect(data).to.be.an("object");
                expect(data).to.have.property("companyName").that.is.a('string');
                expect(data).to.have.property("tokenBuyPrice").that.is.a('number');
                expect(data.tokenBuyPrice).not.to.be.NaN;
                expect(data).to.have.property("tokenSellPrice").that.is.a('number');
                expect(data.tokenSellPrice).not.to.be.NaN;
                expect(data).to.have.property("minimumFundingGoal").that.is.a('number');
                expect(data.minimumFundingGoal).not.to.be.NaN;
                expect(data).to.have.property("unlockingDate").that.is.a('string');
                expect(data).to.have.property("totalInvestment").that.is.a('number');
                expect(data.totalInvestment).not.to.be.NaN;
                expect(data).to.have.property("investorsCount").that.is.a('number');
                expect(data.investorsCount).not.to.be.NaN;
                expect(data).to.have.property("tokensCount").that.is.a('number');
                expect(data.tokensCount).not.to.be.NaN;
                expect(data).to.have.property("burnedTokensCount").that.is.a('number');
                expect(data.burnedTokensCount).not.to.be.NaN;
                expect(data).to.have.property("reserveAmount").that.is.a('number');
                expect(data.reserveAmount).not.to.be.NaN;
                expect(data).to.have.property("buySlope").that.is.a('number');
                expect(data.buySlope).not.to.be.NaN;
                expect(data).to.have.property("sellSlope").that.is.a('number');
                expect(data.sellSlope).not.to.be.NaN;
                expect(data).to.have.property("isMFGReached").that.is.a('boolean');
            });
        });

        it('should get the company valuation', async () => {
            await expect(dataHandler.getCompanyValuation()).to.be.fulfilled.then(data => {
                expect(data).to.be.an("object");
                expect(data).to.have.property("valuation").that.is.a('number');
                expect(data.valuation).not.to.be.NaN;
            });
        });

        it('should get the CAFE parameters', async () => {
            await expect(dataHandler.getCafeParameters()).to.be.fulfilled.then(data => {
                expect(data).to.be.an("object");
                expect(data).to.have.property("baseCurrency").that.is.a('string');
                expect(data).to.have.property("totalAllocation").that.is.a('number');
                expect(data.totalAllocation).not.to.be.NaN;
                expect(data).to.have.property("stakeAllocation").that.is.a('number');
                expect(data.stakeAllocation).not.to.be.NaN;
                expect(data).to.have.property("terminationEvents").that.is.a('array');
                expect(data).to.have.property("minimumInvestment").that.is.a('number');
                expect(data.minimumInvestment).not.to.be.NaN;
                expect(data).to.have.property("initialReserve").that.is.a('number');
                expect(data.initialReserve).not.to.be.NaN;
                expect(data).to.have.property("initialValuation").that.is.a('number');
                expect(data.initialValuation).not.to.be.NaN;
                expect(data).to.have.property("governingRights").that.is.a('string');
                expect(data).to.have.property("reservePercentage").that.is.a('number');
                expect(data.reservePercentage).not.to.be.NaN;
                expect(data).to.have.property("retainedRevenuePercentage").that.is.a('number');
                expect(data.retainedRevenuePercentage).not.to.be.NaN;
                expect(data).to.have.property("minimumFundingGoal").that.is.a('number');
                expect(data.minimumFundingGoal).not.to.be.NaN;
                expect(data).to.have.property("sellSlope").that.is.a('number');
                expect(data.sellSlope).not.to.be.NaN;
                expect(data).to.have.property("buySlope").that.is.a('number');
                expect(data.buySlope).not.to.be.NaN;
            });
        });

        it('should get the user investment data', async () => {
            await expect(dataHandler.getUserInvestmentData(userAddress)).to.be.fulfilled.then(data => {
                expect(data).to.be.an("object");
                expect(data).to.have.property("tezInvested").that.is.a('number');
                expect(data.tezInvested).not.to.be.NaN;
                expect(data).to.have.property("tokensOwned").that.is.a('number');
                expect(data.tokensOwned).not.to.be.NaN;
                expect(data).to.have.property("tokenBuyPrice").that.is.a('number');
                expect(data.tokenBuyPrice).not.to.be.NaN;
                expect(data).to.have.property("tokenSellPrice").that.is.a('number');
                expect(data.tokenSellPrice).not.to.be.NaN;
                expect(data).to.have.property("isMFGReached").that.is.a('boolean');
                expect(data).to.have.property("totalFund").that.is.a('number');
                expect(data.totalFund).not.to.be.NaN;
                expect(data).to.have.property("totalWithdraw").that.is.a('number');
                expect(data.totalWithdraw).not.to.be.NaN;
            });
        });

        it('should get the fund token info', async () => {
            await expect(dataHandler.getFundTokenInfo(userAddress)).to.be.fulfilled.then(data => {
                expect(data).to.be.an("object");
                expect(data).to.have.property("tezCount").that.is.a('number');
                expect(data.tezCount).not.to.be.NaN;
                expect(data).to.have.property("tokensOwned").that.is.a('number');
                expect(data.tokensOwned).not.to.be.NaN;
                expect(data).to.have.property("tokenBuyPrice").that.is.a('number');
                expect(data.tokenBuyPrice).not.to.be.NaN;
                expect(data).to.have.property("lockPeriod").that.is.a('string');
            });
        });

        it('should get the withdraw token info', async () => {
            await expect(dataHandler.getWithdrawTokenInfo(userAddress)).to.be.fulfilled.then(data => {
                expect(data).to.be.an("object");
                expect(data).to.have.property("tezCount").that.is.a('number');
                expect(data.tezCount).not.to.be.NaN;
                expect(data).to.have.property("tokensOwned").that.is.a('number');
                expect(data.tokensOwned).not.to.be.NaN;
                expect(data).to.have.property("tokenSellPrice").that.is.a('number');
                expect(data.tokenSellPrice).not.to.be.NaN;
                expect(data).to.have.property("lockPeriod").that.is.a('string');
            });
        });

        it('should get the user transactions data', async () => {
            await expect(dataHandler.getUserTransactionData(userAddress)).to.be.fulfilled.then(data => {
                expect(data).to.be.an("array");
            });
        });

        it('should get the user token info', async () => {
            await expect(dataHandler.getUserTokenInfo(userAddress)).to.be.fulfilled.then(data => {
                expect(data).to.be.an("object");
                expect(data).to.have.property("tokenBuyPrice").that.is.a('number');
                expect(data.tokenBuyPrice).not.to.be.NaN;
                expect(data).to.have.property("tokensOwned").that.is.a('number');
                expect(data.tokensOwned).not.to.be.NaN;
                expect(data).to.have.property("isMFGReached").that.is.a('boolean');
            });
        });

        it('should get the price given a tokens amount', async () => {
            await expect(dataHandler.getPrice(10, 0)).to.be.fulfilled.then(data => {
                expect(data).to.be.a("number");
                expect(data).not.to.be.NaN;
            });
            await expect(dataHandler.getPrice(10, 1)).to.be.fulfilled.then(data => {
                expect(data).to.be.a("number");
                expect(data).not.to.be.NaN;
            });
        });
        
    });

});