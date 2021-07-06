import useSWR from "swr";
import DataHandler from "../src/services/DataHandler";

type CafeDetailsProps = {
    initialData: any
};

export default function CafeDetails(props: CafeDetailsProps) {
    const { data, error } = useSWR("api/cafe-parameters", { initialData: props.initialData });

    if (!data || error) return <>{error}</>
    
    return (
        <>
            <h1 className="font-bold">Cafe details:</h1>
            <div>
                base currency: {data.baseCurrency} <br/>
                total allocation: {data.totalAllocation} <br/>
                stake allocation: {data.stakeAllocation} <br/>
                termination events: {data.terminationEvents} <br/>
                minimum investment: {data.minimumInvestment} <br/>
                initial reserve: {data.initialReserve} <br/>
                initial valuation: {data.initialValuation} <br/>
                governing rights: {data.governingRights} <br/>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const dataHandler = new DataHandler();
    const initialData = await dataHandler.getCafeParameters().catch(console.error);
    return { props: { initialData } };
}