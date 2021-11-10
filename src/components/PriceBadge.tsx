import Link from "next/link";
import React from "react";
import { format_tez } from "../helpers";

export type PriceBadgeProps = {
    value: number
}

/**
 * Shows the current price, on click redirects to the fund-withdraw page
 */
export default function PriceBadge(props: PriceBadgeProps) {
    return (
        <Link href="/fund-withdraw" passHref>
            <div className="price-badge absolute top-8 left-8 sm:left-auto sm:top-20 sm:right-8 bg-light-gray p-2 cursor-pointer">
                <h3 className="text-accent-1">TZM price: {format_tez(props.value ?? 0)} tez</h3>
            </div>
        </Link>
    );
}
