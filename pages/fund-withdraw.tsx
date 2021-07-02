import useSWR from "swr";

function FundTokenInfo() {
    const { data, error } = useSWR("api/users/fund-token-info");

    if (!data || error) return <>{error}</>

    return (
        <div className="mb-4">
            <h1 className="font-bold">Fund token info:</h1>
            <div>
                token buy price: {data.tokenBuyPrice} <br/>
                lock period: {data.lockPeriod}
            </div>
        </div>
    );
}

function WithdrawTokenInfo() {
    const { data, error } = useSWR("api/users/withdraw-token-info");

    if (!data || error) return <>{error}</>

    return (
        <div className="mb-4">
            <h1 className="font-bold">Withdraw token info:</h1>
            <div>
                token sell price: {data.tokenSellPrice} <br/>
                tokens owned: {data.tokensOwned} <br/>
                lock period: {data.lockPeriod}
            </div>
        </div>
    );
}

export default function FundWithdraw() {
    return (
        <>
            <FundTokenInfo/>
            <WithdrawTokenInfo/>
        </>
    );
}

FundWithdraw.auth = true;