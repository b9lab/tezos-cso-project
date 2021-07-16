import useSWR from "swr";

function InvestmentNumbers() {
    const { data, error } = useSWR("api/investment-numbers");

    if (!data || error) return <>{error}</>

    let unlockingDate = new Date(data.unlockingDate).toLocaleDateString('en-gb', { day: "2-digit", month: "short", year: "2-digit" });

    return (
        <div className="bg-gray-100 p-4">
            <h1 className="pt-4">{data.companyName} Investment Offer</h1>
            <div className="w-full mt-6 body-text-large italic">
                Token
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Price info</p>
                        <h1>ꜩ  {data.tokenBuyPrice}</h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Tokens count</p>
                        <h1>{data.tokensCount}</h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Burned tokens</p>
                        <h1>{data.burnedTokensCount}</h1>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8 body-text-large italic">
                Investment
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Total investment</p>
                        <h1>ꜩ {data.totalInvestment.toLocaleString()}</h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Minimum funding goal</p>
                        <h1>ꜩ { data.minimumFundingGoal.toLocaleString() }</h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Reserve amount</p>
                        <h1>ꜩ {data.reserveAmount.toLocaleString()}</h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Unlocking date</p>
                        <h1>{unlockingDate}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CompanyValuation() {
    const { data, error } = useSWR("api/company-valuation");

    if (!data || error) return <>{error}</>

    return (
        <div className="my-4 p-4">
            <h1>Company valuation:</h1>
            <div>
                valuation: {data.valuation}
            </div>
        </div>
    );
}

export default function GeneralInvestmentInfo() {
    return (
        <>
            <InvestmentNumbers/>
            <CompanyValuation/>
        </>
    );
}