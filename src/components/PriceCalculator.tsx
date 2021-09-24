import React, { useState, useEffect } from "react";
import DataHandler from "../services/DataHandler";
import { TransactionType } from "../utils/dtos";
import { useDebounce } from "../utils/hooks";
import TezAmount from "./TezAmount";

type PriceCalculatorProp = {
    dataHandler: DataHandler,
    amount: string,
    type: TransactionType
}

function PriceCalculator(props: PriceCalculatorProp) {
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
            {
                price != 0 ?
                <label className="m-auto">{props.type == TransactionType.Funding ? "Cost" : "Income"}: <TezAmount amount={price} nostyle={true}/></label> :
                null
            }
        </div>
    );
}

export default PriceCalculator;