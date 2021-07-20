import useSWR from "swr";
import DataHandler from "../src/services/DataHandler";

type CafeDetailsProps = {
    initialData: any
};

export default function CafeDetails(props: CafeDetailsProps) {
    const { data, error } = useSWR("api/cafe-parameters", { initialData: props.initialData });

    if (!data || error) return <>{error}</>

    return (
        <div className="p-4">
            <h1 className="mt-4">CAFE details</h1>
            <div className="mt-6 w-full sm:w-2/3 flex flex-col bg-white shadow-2xl rounded px-4 py-6">
                <table className="table-auto">
                    <tbody>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Base currency</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.baseCurrency}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Total allocation</p>
                                <p className="body-text-small">Amount in the contract</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.totalAllocation}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Stake allocation</p>
                                <p className="body-text-small">Initial amount paid</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.stakeAllocation}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Termination events</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.terminationEvents.toString()}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Minimum investment</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.minimumInvestment}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Initial reserve</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.initialReserve}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Initial valuation</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.initialValuation}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Governing rights</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.governingRights}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Reserve percentage</p>
                                <p className="body-text-small">Percentage of the funds being held in the cash reserve</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.reservePercentage}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Retained revenue percentage</p>
                                <p className="body-text-small">Percentage of the revenues being funneled into cash reserve</p>
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
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.buySlope}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Sell slope</p>
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