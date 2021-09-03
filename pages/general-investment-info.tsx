import React from "react";
import useSWR from "swr";
import CtaCard from "../src/components/CtaCard";
import TezAmount from "../src/components/TezAmount";
import TokenAmount from "../src/components/TokenAmount";
import { format_date } from "../src/helpers";

function CompanyValuation() {
    const { data } = useSWR("api/company-valuation");

    return (
        <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
            <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4 border border-accent-1">
                <p>Company valuation</p>
                <h1><span className="currency-sign pr-4 text-gray-500">$</span>{data?.valuation}<span className="currency-suffix pl-2 text-2xl font-light">USD</span></h1>
            </div>
        </div>
    );
}

export default function GeneralInvestmentInfo() {
    const { data, error } = useSWR("api/investment-numbers");

    if (!data || error) return <>{error}</>

    return (
        <div className="pt-8 px-8">
            <h1>{data.companyName} - Investment Offer</h1>
            <div className="mt-2">
                You can find an overview of the PEQ offering here.
            </div>
            <h2 className="mt-8 highlight">General information</h2>
            <div className="flex flex-wrap justify-between">
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4 border border-accent-1">
                        <p>Current token price {data.isMFGReached ? "(buy/sell)" : ""}</p>
                        {
                            data.isMFGReached ? 
                            <h1><TezAmount amount={data.tokenBuyPrice}/> / <TezAmount amount={data.tokenSellPrice}/></h1> :
                            <h1><TezAmount amount={data.tokenBuyPrice}/></h1>
                        }
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Total investment</p>
                        <h1><TezAmount amount={data.totalInvestment}/></h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Number of investors</p>
                        <h1>{data.investorsCount}</h1>
                    </div>
                </div>
                <CtaCard href="/fund-withdraw" text="Buy now &#8594;" title="Invest in TZMINT"/>
            </div>
            <h2 className="mt-12 highlight">Investment overview</h2>
            <div className="flex flex-wrap justify-between">
                <CompanyValuation/>
                <div className="w-full flex-grow sm:max-w-1/2">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Minimal funding goal</p>
                        <h1><TezAmount amount={data.minimumFundingGoal}/></h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Unlocking date</p>
                        <h1>{format_date(data.unlockingDate)}</h1>
                    </div>
                </div>
                <CtaCard href="/cafe-details" text="See all parameters &#8594;" title="Invest in TZMINT"/>
            </div>
            <h2 className="mt-12 highlight">Token balance</h2>
            <div className="flex flex-wrap justify-between pb-12">
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Amount of tokens issued</p>
                        <h1><TokenAmount amount={data.tokensCount}/></h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Amount of burned tokens</p>
                        <h1><TokenAmount amount={data.burnedTokensCount}/></h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Total reserve</p>
                        <h1><TezAmount amount={data.reserveAmount}/></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}