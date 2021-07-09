import { useContext } from "react";
import { AuthContext } from "../src/components/Auth";
import DataHandler from "../src/services/DataHandler";
import { UserTransactionDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";

export default function Transactions() {
    const address = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: UserTransactionDto[] = useData(dataHandler.getUserTransactionData, address);
    
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