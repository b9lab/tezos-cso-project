import React, { ChangeEvent, useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import { FUND_MULTIPLIER, FUND_PROCESSING_INITIAL_INTERVAL, FUND_PROCESSING_MAX_INTERVAL } from "../src/constants";
import DataHandler from "../src/services/DataHandler";
import { FundDto, FundTokenInfoDto, UserTransactionDto } from "../src/utils/dtos";
import { useData, useInterval } from "../src/utils/hooks";
import TezAmount from "../src/components/TezAmount";
import { useRouter } from "next/dist/client/router";
import Modal from "../src/components/Modal";

type FundProcessorProp = {
    address: string,
    hash: string,
    handler: DataHandler,
    onComplete: (transaction: UserTransactionDto) => void
}

function FundProcessor(props: FundProcessorProp) {
    useInterval(async () => {
        const transactions = await props.handler.getUserTransactionData(props.address);
        const confirmedTransaction = transactions.find((transaction: UserTransactionDto) => {
            return transaction.hash == props.hash;
        });
        if (confirmedTransaction) props.onComplete(confirmedTransaction);
    }, FUND_PROCESSING_INITIAL_INTERVAL, FUND_PROCESSING_MAX_INTERVAL);

    return <div> Processing </div>;
}

export default function Fund() {
    const context: AuthContextData = useContext(AuthContext);
    const router = useRouter();
    const dataHandler = new DataHandler();
    const data: FundTokenInfoDto = useData(dataHandler.getFundTokenInfo, context.address);
    const [amount, setAmount] = useState<string>('');
    const [hashToCheck, setHashToCheck] = useState<string | null>(null);

    const handlers = {
        amount: (event: ChangeEvent<HTMLInputElement>): void => { 
            if (event.target.validity.valid) setAmount(event.target.value);
        },
        fund: () => {
            setHashToCheck('test')
            // todo: check amount != null
            // const fundAmount = parseFloat(amount) * FUND_MULTIPLIER;
            // const fundDto: FundDto = {
            //     amount: fundAmount,
            //     accountAddress: context.address
            // };
            // dataHandler.fund(fundDto).then(setHashToCheck);
        },
        onComplete: (transaction: UserTransactionDto) => {
            setHashToCheck(null);
            console.log(transaction);
            // todo: show success modal -> on ok click reload page
        }
    };

    return (
        <div>
            <div className="p-4">
                <h1 className="pt-4">Fund</h1>
                <div className="w-full mt-6 body-text-large italic">
                    Token Info
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Buy price</p>
                            <h1><TezAmount amount={data?.tokenBuyPrice}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Tokens owned</p>
                            <h1>{data?.tokensOwned?.toLocaleString()}</h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Tezos in account</p>
                            <h1><TezAmount amount={data?.tezCount}/></h1>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-8 body-text-large italic">
                    Purchase Tokens
                </div>
                <div>
                    <Input value={amount} handler={handlers.amount} label="Amount" pattern="[0-9]+\.?[0-9]*|\.[0-9]+"/>
                    <Button handler={handlers.fund}>Fund</Button>
                </div>
            </div>
            {
                hashToCheck && <FundProcessor address={context.address} hash={hashToCheck} handler={dataHandler} onComplete={handlers.onComplete}/>
            }
        </div>
    );
}

Fund.auth = true;