import React from "react";
import { format_tez } from "../helpers";

type PriceBadgeProps = {
    value: number
};

function PriceBadge(props: PriceBadgeProps) {
    return (
        <div className="price-badge absolute top-20 right-10 bg-light-gray p-2">
            <h3 className="text-accent-1">TZM price: {format_tez(props.value ?? 0)} tez</h3>
        </div>
    );
}

export default PriceBadge;
