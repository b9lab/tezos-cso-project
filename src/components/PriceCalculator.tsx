import React, { useState, useEffect } from "react";
import DataHandler from "../services/DataHandler";
import { TransactionType } from "../utils/dtos";
import { useDebounce } from "../utils/hooks";
import TezAmount from "./TezAmount";

export type PriceCalculatorProp = {
    dataHandler: DataHandler,
    amount: string,
    type: TransactionType
}

/**
 * Calculate and shows the price for the requested tokens (on both fund and withdraw)
 */
export default function PriceCalculator(props: PriceCalculatorProp) {
    const [price, setPrice] = useState<number>(0);

    const debouncedAmount: string = useDebounce<string>(props.amount == '' ? '0' : props.amount, 500);

    useEffect(() => {
        let isMounted = true;

        if (debouncedAmount) {
            if (parseFloat(debouncedAmount) == 0) {
                setPrice(0);
            } else {
                props.dataHandler.getPrice(parseFloat(debouncedAmount), props.type).then((value: any) => {
                    if (isMounted) {
                        setPrice(value);
                    }
                }).catch(console.error);
            }
        }

        return () => { isMounted = false };
    }, [debouncedAmount, props.dataHandler, props.type]);

    return (
        <div className="flex">
            <h1 className="mt-auto"><TezAmount amount={price}/></h1>
        </div>
    );
}
