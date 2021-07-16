import Link from "next/link";
import useSWR from "swr";

function InvestmentNumbers() {
    const { data, error } = useSWR("api/investment-numbers");

    if (!data || error) return <>{error}</>

    return (
        <div className="mb-4">
            <h1 className="font-bold">Investment numbers:</h1>
            <div>
                company name: {data.companyName} <br/>
                token buy price: {data.tokenBuyPrice}<br/>
                token sell price: {data.tokenSellPrice}<br/>
                minimum funding goal: {data.minimumFundingGoal}<br/>
                unlocking date: {data.unlockingDate}<br/>
                total investment: {data.totalInvestment}<br/>
                investors count: {data.investorsCount}<br/>
                tokens count: {data.tokensCount}<br/>
                burned tokens count: {data.burnedTokensCount}<br/>
                reserve amount: {data.reserveAmount}<br/>
                buy slope: {data.buySlope}<br/>
                sell slope: {data.sellSlope}<br/>
            </div>
        </div>
    );
}

function CompanyValuation() {
    const { data, error } = useSWR("api/company-valuation");

    if (!data || error) return <>{error}</>

    return (
        <div className="mb-4">
            <h1 className="font-bold">Company valuation:</h1>
            <div>
                valuation: {data.valuation}
            </div>
        </div>
    );
}

export default function GeneralInvestmentInfo() {
    return (
        <>
            <div className="mb-4">General Investment Info page</div>
            <InvestmentNumbers/>
            <CompanyValuation/>
            <Link href="/cafe-details" passHref>
                <div className="w-full h-80 bg-purple-400 cursor-pointer p-4 text-white text-3xl">Cafe details</div>
            </Link>
        </>
    );
}