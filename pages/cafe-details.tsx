import useSWR from "swr";
import DataHandler from "../src/services/DataHandler";
import TezAmount from "../src/components/TezAmount";
import { format_percentage } from "../src/helpers";
import { CAFE_PARAMETERS_API_ENDPOINT } from "../src/constants";

export type CafeDetailsProps = {
    initialData: any
};

/**
 * Parameters of the Continuous Agreement page
 */
export default function CafeDetails(props: CafeDetailsProps) {
    // The following data is fetched at build time and shown as placeholder on the initial render while on client-side it will be fetched again and updated
    const { data, error } = useSWR(CAFE_PARAMETERS_API_ENDPOINT, { initialData: props.initialData });

    if (!data || error) return <>{error}</>

    return (
        <div className="pb-8">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Parameters of the Continuous Agreement</h1>
                <div className="body-text-large italic">
                    Here you can find an overview of the continuous agreement&apos;s parameters
                </div>
            </div>

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
                                <p className="body-text-small">Total Amount of equity allocated for the Continuous Agreement offering</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{format_percentage(data.totalAllocation)}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Stakeholder equity allocation</p>
                                <p className="body-text-small">
                                    Maximum amount of equity which can be used to compensate stakeholders (part of the total equity allocation).
                                </p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{format_percentage(data.stakeAllocation)}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Termination events</p>
                                <p className="body-text-small">Events that terminate the CAFE</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.terminationEvents.toString()}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Minimum investment</p>
                                <p className="body-text-small">Minimum amount required for a new investment</p>
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
                            <td className="border border-dark-gray px-4 py-2">{data.initialValuation}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Governing rights</p>
                                <p className="body-text-small">Decision-making authority and voting rights of token holders</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.governingRights}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Reserve percentage</p>
                                <p className="body-text-small">Percentage of the funds being held in the contract&apos;s reserve</p>
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
                            </td>
                            <td className="border border-dark-gray px-4 py-2"><TezAmount amount={data.minimumFundingGoal} nostyle={true} hideSign={true}/></td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Buy slope</p>
                                <p className="body-text-small">The slope of the buy function</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.buySlope}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Sell slope</p>
                                <p className="body-text-small">The slope of the sell function</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.sellSlope}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const dataHandler = new DataHandler();
    const initialData = await dataHandler.getCafeParameters().catch(console.error);
    return { props: { initialData } };
}
