import React, { useContext } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import DataHandler from "../src/services/DataHandler";
import { UserInvestmentDto, UserTransactionDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";
import TezAmount from "../src/components/TezAmount";
import TransactionsTable from "../src/components/TransactionsTable";
import TokenAmount from "../src/components/TokenAmount";

export default function PersonalInvestmentInfo() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: UserInvestmentDto = useData(dataHandler.getUserInvestmentData, context.address);
    const transactionList: Array<UserTransactionDto> = useData(dataHandler.getUserTransactionData, context.address);

    return (
        <div className="p-8">
            <h1>My Investment</h1>
            <div className="mt-2">
                Here you can find an overview of your investment in the continuous agreement for future equity.
            </div>
            <h2 className="mt-8 highlight">Portfolio overview</h2>
            <div className="flex flex-wrap justify-between">
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Tokens owned</p>
                        <h1><TokenAmount amount={data?.tokensOwned}/></h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Tezos invested</p>
                        <h1><TezAmount amount={data?.tezInvested}/></h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Price information {data?.isMFGReached ? "(buy/sell)" : ""}</p>
                        {
                            data?.isMFGReached ? 
                            <h1><TezAmount amount={data?.tokenBuyPrice}/> / <TezAmount amount={data?.tokenSellPrice}/></h1> :
                            <h1><TezAmount amount={data?.tokenBuyPrice}/></h1>
                        }
                    </div>
                </div>
            </div>
            {
                transactionList?.length > 0 &&
                <>
                    <h2 className="mt-8 highlight">Transactions</h2>
                    <TransactionsTable items={transactionList}/>
                </>
            }
            
        </div>
    );
}

PersonalInvestmentInfo.auth = true;
