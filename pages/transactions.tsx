import React, { useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import TezAmount from "../src/components/TezAmount";
import { format_date } from "../src/helpers";
import DataHandler from "../src/services/DataHandler";
import { UserTransactionDto, TransactionType } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";

export default function Transactions() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: UserTransactionDto[] = useData(dataHandler.getUserTransactionData, context.address);
    const [ typeFilter, setTypeFilter ] = useState<TransactionType | null>(null);

    const transactionFilter = (item: UserTransactionDto) => typeFilter == null || typeFilter === item.transactionType;

    const transactionMap = (item: UserTransactionDto) => {
        return (
            <div className="w-full flex justify-between body-text-small bg-light-gray odd:bg-white py-2 px-4 last:rounded-b " key={item.hash}>
                <p className="w-1/4">{format_date(item?.date)}</p>
                <p className="w-1/4">{item?.transactionType == TransactionType.Funding ? 'Funding' : 'Withdrawal'}</p>
                <p className="w-1/4"><TezAmount amount={item?.tezAmount} nostyle={true}/></p>
                <p className="w-1/4">{item?.tokenAmount}</p>
            </div>
        );
    };

    const transactionSort = (item1: UserTransactionDto, item2: UserTransactionDto) => {
        return new Date(item1.date).getTime() - new Date(item2.date).getTime();
    };

    return (
        <div className="p-4">
            <h1 className="mt-4">Transactions</h1>
            <div className="body-text-small flex space-x-2 mb-4 px-4 pt-6" style={{fontFamily: 'Libre Franklin'}}>
                <div>Filter: </div>
                <div 
                    className={ ( typeFilter == null ? "text-accent-1 " : "" ) + "cursor-pointer" } 
                    onClick={ () => setTypeFilter(null) }>
                    All
                </div>
                <p> | </p>
                <div 
                    className={ ( typeFilter == TransactionType.Funding ? "text-accent-1 " : "" ) + "cursor-pointer" } 
                    onClick={ () => setTypeFilter(TransactionType.Funding) }>
                    Fund
                </div>
                <p> | </p>
                <div 
                    className={ ( typeFilter == TransactionType.Withdrawal ? "text-accent-1 " : "" ) + "cursor-pointer" } 
                    onClick={ () => setTypeFilter(TransactionType.Withdrawal) }>
                    Withdraw
                </div>
            </div>
            <div className="mt-6 w-full flex flex-col shadow-2xl rounded">
                <div className="w-full flex justify-between bg-accent-1 text-white px-4 py-2 rounded-t">
                    <h3 className="w-1/4">Date</h3>
                    <h3 className="w-1/4">Type</h3>
                    <h3 className="w-1/4">Tez Amount</h3>
                    <h3 className="w-1/4">Token</h3>
                </div>
                { data?.filter(transactionFilter).sort(transactionSort).map(transactionMap) }
            </div>
        </div>
    );
}

Transactions.auth = true;
