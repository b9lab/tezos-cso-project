import React from "react";
import useSWR from "swr";
import ChartWrapper from "../src/components/ChartWrapper";
import CtaCard from "../src/components/CtaCard";
import PriceBadge from "../src/components/PriceBadge";
import TezAmount from "../src/components/TezAmount";
import TokenAmount from "../src/components/TokenAmount";
import { format_date, format_tez } from "../src/helpers";

function CompanyValuation() {
    const { data } = useSWR("api/company-valuation");

    return (
        <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
            <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4 border">
                <p>Company valuation</p>
                <h1><span className="currency-sign pr-4 text-gray-500">$</span>{data?.valuation}<span className="currency-suffix pl-2 text-2xl font-light">USD</span></h1>
            </div>
        </div>
    );
}

const options = {
    chart: {
        id: "prices-chart",
        zoom: {
            enabled: false
        },
        dataLabels: {
            enabled: false
        },
    },
    labels: Array<string>(),
    xaxis: {
        labels: {
            show: false
        }
    }
};
const series = [
    {
        name: "price",
        data: Array<string>()
    }
];

type PricesChartProp = {
    values: Array<any>
}

function PricesChart(props: PricesChartProp) {
    options.labels = [];
    series[0].data = [];
    for (const price of props.values) {
        options.labels.push(format_date(price.time));
        series[0].data.push(format_tez(price.price));
    }

    return (
        <ChartWrapper options={options} series={series} type="line"/>
    );
}

export default function GeneralInvestmentInfo() {
    const { data } = useSWR("api/investment-numbers");

    return (
        <>
            <PriceBadge value={data?.tokenBuyPrice}/>
            <div className="pt-8 px-8">
                <h1>{data?.companyName} - Investment Offer</h1>
                <div className="my-2">
                    Shows the current investment and offering overview of TZMINT.
                </div>
                {
                    data?.prices &&
                    <PricesChart values={data?.prices}/>
                }
                <h2 className="mt-8 highlight">General information</h2>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4 border border-accent-1">
                            <p>Current token price {data?.isMFGReached ? "(buy/sell)" : ""}</p>
                            {
                                data?.isMFGReached ? 
                                <h1><TezAmount amount={data?.tokenBuyPrice}/> / <TezAmount amount={data?.tokenSellPrice}/></h1> :
                                <h1><TezAmount amount={data?.tokenBuyPrice}/></h1>
                            }
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pl-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Total investment</p>
                            <h1><TezAmount amount={data?.totalInvestment}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Number of investors</p>
                            <h1>{data?.investorsCount}</h1>
                        </div>
                    </div>
                    <CtaCard href="/fund-withdraw" text="Buy now &#8594;" title="Invest in TZMINT" classes="sm:pl-2"/>
                </div>
                <h2 className="mt-12 highlight">Investment overview</h2>
                <div className="flex flex-wrap justify-between">
                    <CompanyValuation/>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pl-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Minimal funding goal</p>
                            <h1><TezAmount amount={data?.minimumFundingGoal}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Unlocking date</p>
                            <h1>{format_date(data?.unlockingDate)}</h1>
                        </div>
                    </div>
                    <CtaCard href="/cafe-details" text="See all parameters &#8594;" title="TZMINT offering configuration" classes="sm:pl-2"/>
                </div>
                <h2 className="mt-12 highlight">Token balance</h2>
                <div className="flex flex-wrap justify-between pb-12">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Amount of tokens issued</p>
                            <h1><TokenAmount amount={data?.tokensCount}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pl-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Amount of burned tokens</p>
                            <h1><TokenAmount amount={data?.burnedTokensCount}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Total reserve</p>
                            <h1><TezAmount amount={data?.reserveAmount}/></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}