import useSWR from "swr";
import DataHandler from "../src/services/DataHandler";

type CafeDetailsProps = {
    initialData: any
};

export default function CafeDetails(props: CafeDetailsProps) {
    const { data, error } = useSWR("api/cafe-parameters", { initialData: props.initialData });

    if (!data || error) return <>{error}</>

    return (
        <div className="p-8">
            <h1 className="mb-4">Parameters of the Continuous Agreement</h1>
            <div>
                Here you can find an overview of the CAFE’s parameters.
            </div>
            <div className="mt-6 w-full sm:w-2/3 flex flex-col bg-white shadow-2xl rounded px-4 py-6">
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
                                <p className="font-bold">Total allocation</p>
                                <p className="body-text-small">Amount of tokens held in the contract</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.totalAllocation}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Stake allocation</p>
                                <p className="body-text-small">
                                    What is meant by the initial amount paid? If you mean the initial price, 
                                    then I would recommend using “Initial price per token in tez”
                                </p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.stakeAllocation}</td>
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
                                <p className="body-text-small">Minimum amount required for investment in tez</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.minimumInvestment}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Initial reserve</p>
                                <p className="body-text-small">Initial amount in the reserve in tez</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.initialReserve}</td>
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
                            <td className="border border-dark-gray px-4 py-2">{data.reservePercentage}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Retained revenue percentage</p>
                                <p className="body-text-small">Percentage of the revenues funneled to the reserve</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.retainedRevenuePercentage}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Minimum funding goal</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.minimumFundingGoal}</td>
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
