import React, { useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import TransactionsTable from "../src/components/TransactionsTable";
import DataHandler from "../src/services/DataHandler";
import { UserTransactionDto, TransactionType } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";

export default function Transactions() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: UserTransactionDto[] = useData(dataHandler.getUserTransactionData, context.address);
    const [ typeFilter, setTypeFilter ] = useState<TransactionType | null>(null);

    const transactionFilter = (item: UserTransactionDto) => typeFilter == null || typeFilter === item.transactionType;

    return (
        <div className="p-8">
            <h1>Transactions</h1>
            <div className="mt-2">
                Here you can find an overview of all transactions. You can filter for all transactions, as well as sell (Fund) and buy (Withdraw) transactions.
            </div>
            <div className="body-text-small flex space-x-2 mb-4 px-4 pt-6 font-family-headline">
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
            <TransactionsTable items={data?.filter(transactionFilter)}/>
        </div>
    );
}

Transactions.auth = true;
