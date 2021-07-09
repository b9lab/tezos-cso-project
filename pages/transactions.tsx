import { useContext } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import DataHandler from "../src/services/DataHandler";
import { UserTransactionDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";

export default function Transactions() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: UserTransactionDto[] = useData(dataHandler.getUserTransactionData, context.address);
    
    return (
        <>
            <div className="mb-4 font-bold">Personal Investment Info page</div>
            { data?.map((item: any, index: number) => {
                return (
                    <div key={index}>
                        date: {item?.date} <br/>
                        tez amount: {item?.tezAmount} <br/>
                        token amount: {item?.tokenAmount} <br/>
                        transaction type: {item?.transactionType == 0 ? 'Funding' : 'Withdrawal'}
                    </div>
                );
            })}
        </>
    );
}

Transactions.auth = true;