import useSWR from "swr";

export default function Transactions() {
    const { data } = useSWR("api/users/transactions");
    
    return (
        <>
            <div className="mb-4 font-bold">Personal Investment Info page</div>
            { data?.map((item: any) => {
                return (
                    <div>
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