import useSWR from "swr";

export default function CafeDetails() {
    const { data, error } = useSWR("api/cafe-parameters");

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