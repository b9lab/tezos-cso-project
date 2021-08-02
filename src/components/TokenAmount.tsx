type TokenAmountProps = {
    amount: number,
    size?: string,
    nostyle?: boolean
};

function TokenAmount(props: TokenAmountProps) {
    return (
        <span className="token-amount">
            <span className="amount">{ props.amount ?? 0 }</span>
            <span className={"currency-suffix pl-2 " + (props.nostyle ? "" : "text-2xl font-light")}>TZM</span>
        </span>
    );
}

export default TokenAmount;
