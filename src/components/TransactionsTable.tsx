import React from "react";
import { format_date } from "../helpers";
import { TransactionType, UserTransactionDto } from "../utils/dtos";
import TezAmount from "./TezAmount";

type TransactionsTableProps = {
    items: Array<UserTransactionDto>
}

function TransactionsTable(props: TransactionsTableProps) {
    const transactionMap = (item: UserTransactionDto) => {
        return (
            <div className="w-full flex justify-between body-text-small bg-light-gray odd:bg-white py-2 px-4 last:rounded-b " key={item.hash}>
                <p className="w-1/4">{format_date(item?.date)}</p>
                <p className="w-1/4">{item.transactionType == TransactionType.Funding ? 'Funding' : 'Withdrawal'}</p>
                <p className="w-1/4"><TezAmount amount={item?.tezAmount} nostyle={true}/></p>
                <p className="w-1/4">{item?.tokenAmount}</p>
            </div>
        );
    };

    const transactionSort = (item1: UserTransactionDto, item2: UserTransactionDto) => {
        return new Date(item1.date).getTime() - new Date(item2.date).getTime();
    };
    
    return (
        <div className="mt-6 w-full flex flex-col shadow-2xl rounded">
            <div className="w-full flex justify-between bg-accent-1 text-white px-4 py-2 rounded-t">
                <h3 className="w-1/4">Date</h3>
                <h3 className="w-1/4">Transaction type</h3>
                <h3 className="w-1/4">tez amount</h3>
                <h3 className="w-1/4">Amount of tokens</h3>
            </div>
            { props.items?.sort(transactionSort).map(transactionMap) }
        </div>
    );
}

export default TransactionsTable;
