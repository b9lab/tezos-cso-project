import { format_tez } from "../helpers";

type TezAmountProps = {
    amount: number,
    size?: string,
    nostyle?: boolean,
    hideSign?: boolean,
    negative?: boolean
};

function TezAmount(props: TezAmountProps) {
    var size: string = props.size ?? 'medium';
    var classes: string = "max-w-sm my-4 rounded outline-none py-2 px-10 ";

    return (
        <span className="tez-amount">
            {props.hideSign ? "" : <span className="currency-sign pr-4 text-gray-500">ꜩ</span>}
            {props.negative ? <span>- </span> : ""}
            <span className="amount">{ format_tez(props.amount ?? 0) }</span>
            <span className={"currency-suffix pl-2 " + (props.nostyle ? "" : "text-2xl font-light")}>tez</span>
        </span>
    );
}

export default TezAmount;
