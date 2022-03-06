import React from "react";
import useSWR from "swr";
import ChartWrapper from "../src/components/ChartWrapper";
import CtaCard from "../src/components/CtaCard";
import PriceBadge from "../src/components/PriceBadge";
import TezAmount from "../src/components/TezAmount";
import TokenAmount from "../src/components/TokenAmount";
import { COMPANY_VALUATION_API_ENDPOINT, INVESTMENT_NUMBERS_API_ENDPOINT } from "../src/constants";
import { format_date, format_tez } from "../src/helpers";

function CompanyValuation() {
    const { data } = useSWR(COMPANY_VALUATION_API_ENDPOINT);

    return (
        <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
            <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4 border">
                <p>Company valuation</p>
                <h1><span className="currency-sign pr-4 text-gray-500">$</span>{data?.valuation.toLocaleString()}<span className="currency-suffix pl-2 text-2xl font-light">USD</span></h1>
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
    },
    yaxis: {
        min: 0,
        forceNiceScale: true
    },
    colors: ['#29CAB4'],
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
    for (const item of props.values) {
        if (item.price == 0) continue;
        options.labels.push(format_date(item.time));
        series[0].data.push(format_tez(item.price));
    }

    return (
        <ChartWrapper options={options} series={series} type="line" height="400px"/>
    );
}

/**
 * Overview page
 */
export default function GeneralInvestmentInfo() {
    const { data } = useSWR(INVESTMENT_NUMBERS_API_ENDPOINT);

    return (
        <>
            <PriceBadge value={data?.tokenBuyPrice}/>
            <div className="pt-8 px-8">
                <h1>{data?.companyName} - Investment Overview</h1>
                <p className="my-2">
                    All current information the TZMINT offering
                </p>
                {
                    data?.prices &&
                    <PricesChart values={data?.prices}/>
                }
                <h2 className="mt-8"><span className="highlight">General information</span></h2>
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
                            <h1>{data?.investorsCount.toLocaleString()}</h1>
                        </div>
                    </div>
                    <CtaCard href="/fund-withdraw" text="Buy now &#8594;" title="Invest in TZMINT" classes="sm:pl-2"/>
                </div>
                <h2 className="mt-12"><span className="highlight">Investment overview</span></h2>
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
                <h2 className="mt-12"><span className="highlight">Token balance</span></h2>
                <div className="flex flex-wrap justify-between pb-12">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Number of tokens issued</p>
                            <h1><TokenAmount amount={data?.tokensCount}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pl-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Number of burned tokens</p>
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

                <div className="w-full flex flex-wrap justify-between pb-12">
                    <CtaCard href="https://tezos.b9lab.com/rolling-safe-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Ready to develop a Rolling SAFE?" classes="sm:pr-2"/>
                    <CtaCard href="/personal-investment-info" text="Next page &#8594;" title="Want to have a closer look at your own investment?" classes="sm:pl-2"/>
                </div>

            </div>
        </>
    );
}

export default function CafeDetails(props: CafeDetailsProps) {
    // The following data is fetched at build time and shown as placeholder on the initial render while on client-side it will be fetched again and updated
    const { data, error } = useSWR(ROLLING_SAFE_PARAMETERS_API_ENDPOINT, { initialData: props.initialData });

    if (!data || error) return <>{error}</>

    return (
            <div className="mt-6 w-full m-auto sm:w-2/3 flex flex-col bg-white shadow-2xl rounded px-4 py-6">
                <table className="table-auto">
                    <tbody>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Base currency</p>
                                <p className="body-text-small">Currency against which the exchange rate is quoted</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.baseCurrency}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Total equity allocation</p>
                                <p className="body-text-small">Total amount of equity allocated to the Rolling SAFE offering</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{format_percentage(data.totalAllocation)}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Stakeholder equity allocation</p>
                                <p className="body-text-small">
                                    Part of the total equity allocation reserved to compensate stakeholders in case their held value decreases due to the Rolling SAFE
                                </p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{format_percentage(data.stakeAllocation)}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Termination events</p>
                                <p className="body-text-small">Events that terminate the Rolling SAFE</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.terminationEvents.toString()}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Minimum investment</p>
                                <p className="body-text-small">The minimum amount required for a new investment</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2"><TezAmount amount={data.minimumInvestment} nostyle={true} hideSign={true}/> </td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Initial reserve</p>
                                <p className="body-text-small">Initially reserved amount</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2"><TezAmount amount={data.initialReserve} nostyle={true} hideSign={true}/></td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Initial valuation</p>
                                <p className="body-text-small">Initial company valuation in USD</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.initialValuation.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Governing rights</p>
                                <p className="body-text-small">Decision-making authority and voting rights for token holders</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.governingRights}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Reserve percentage</p>
                                <p className="body-text-small">Percentage of the funds held in the contract&apos;s reserve</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.reservePercentage} %</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Retained revenue percentage</p>
                                <p className="body-text-small">Percentage of the revenues funneled to the reserve</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.retainedRevenuePercentage} %</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Minimum funding goal</p>
                                <p className="body-text-small">Lowest funding goal for the offering</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2"><TezAmount amount={data.minimumFundingGoal} nostyle={true} hideSign={true}/></td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Buy slope</p>
                                <p className="body-text-small">The slope of the buy function determining the buy price</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.buySlope.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Sell slope</p>
                                <p className="body-text-small">The slope of the sell function determining the sell price</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.sellSlope.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
}

export async function getStaticProps() {
    const dataHandler = new DataHandler();
    const initialData = await dataHandler.getRollingSafeParameter().catch(console.error);
    return { props: { initialData } };
}
