import { format_tez } from "../helpers";

type ButtonProps = {
    amount: number,
    size?: string
};

function TezAmount(props: TezAmountProps) {
    var size: string = props.size ?? 'medium';
    var classes: string = "max-w-sm my-4 rounded outline-none py-2 px-10 ";

    return (
        <span className="tez-amount">
            <span className="currency-sign pr-4 text-gray-500">ꜩ</span>
            <span className="amount">{ format_tez(props.amount) }</span>
            <span className="currency-suffix pl-2 text-2xl font-light">tez</span>
        </span>
    );
}

export default TezAmount;
