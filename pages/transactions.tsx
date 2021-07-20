import React, { useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import TezAmount from "../src/components/TezAmount";
import DataHandler from "../src/services/DataHandler";
import { UserTransactionDto, TransactionType } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";

export default function Transactions() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: UserTransactionDto[] = useData(dataHandler.getUserTransactionData, "tz1L8wgLL3CSJbRMA1FGm8zHzGpSG1qi15HF");
    const [ typeFilter, setTypeFilter ] = useState<TransactionType | null>(null);

    const transactionFilter = (item: UserTransactionDto) => typeFilter == null || typeFilter === item.transactionType;

    const transactionMap = (item: UserTransactionDto, index: number) => {
        let date = new Date(item?.date).toLocaleDateString('en-gb', { day: "2-digit", month: "short", year: "2-digit" });
        return (
            <div className="w-full flex justify-between body-text-small mt-4" key={index}>
                <p className="w-1/4">{date}</p>
                <p className="w-1/4">{item?.transactionType == TransactionType.Funding ? 'Funding' : 'Withdrawal'}</p>
                <p className="w-1/4"><TezAmount amount={item?.tezAmount}/></p>
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
            <div className="mt-6 w-full sm:w-2/3 flex flex-col bg-white shadow-2xl rounded px-4 py-6">
                <div className="body-text-small flex space-x-2 mb-4">
                    <div>Filter: </div>
                    <div 
                        className={ ( typeFilter == null ? "text-accent-1 " : "" ) + "cursor-pointer" } 
                        onClick={ () => setTypeFilter(null) }>
                        All
                    </div>
                    <div 
                        className={ ( typeFilter == TransactionType.Funding ? "text-accent-1 " : "" ) + "cursor-pointer" } 
                        onClick={ () => setTypeFilter(TransactionType.Funding) }>
                        Fund
                    </div>
                    <div 
                        className={ ( typeFilter == TransactionType.Withdrawal ? "text-accent-1 " : "" ) + "cursor-pointer" } 
                        onClick={ () => setTypeFilter(TransactionType.Withdrawal) }>
                        Withdraw
                    </div>
                </div>
                <div className="w-full flex justify-between border-b border-dark-gray">
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
