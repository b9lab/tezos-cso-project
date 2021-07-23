import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import { FUND_MULTIPLIER } from "../src/constants";
import DataHandler from "../src/services/DataHandler";
import { FundDto, FundTokenInfoDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";
import TezAmount from "../src/components/TezAmount";
import TransactionInspector from "../src/components/TransactionInspector";

export default function Fund() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: FundTokenInfoDto = useData(dataHandler.getFundTokenInfo, context.address);
    const [amount, setAmount] = useState<string>('');
    const [hashToCheck, setHashToCheck] = useState<string | null>(null);
    const [showTransactionInspector, setShowTransactionInspector] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handlers = {
        amount: (event: ChangeEvent<HTMLInputElement>): void => { 
            if (event.target.validity.valid) setAmount(event.target.value);
        },
        fund: (event: FormEvent) => {
            event.preventDefault();

            if (!amount) return;

            const fundAmount = parseFloat(amount) * FUND_MULTIPLIER;
            const fundDto: FundDto = {
                amount: fundAmount,
                accountAddress: context.address
            };
            dataHandler.fund(fundDto).then(setHashToCheck).catch((error: Error) => {
                setError(error.message);
            });
            setShowTransactionInspector(true);
        },
        closeTransactionInspector: () => { 
            setShowTransactionInspector(false);
            setError(null);
        }
    };

    return (
        <div>
            <div className="p-8">
                <h1>Fund</h1>
                <div className="mt-2">
                    Here you can buy CAFE tokens for tez.
                </div>
                <h2 className="mt-8 highlight">Token buy information</h2>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Current buy price</p>
                            <h1><TezAmount amount={data?.tokenBuyPrice}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Amount of tokens owned</p>
                            <h1>{data?.tokensOwned ?? 0}</h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Amount of tez in your account</p>
                            <h1><TezAmount amount={data?.tezCount}/></h1>
                        </div>
                    </div>
                </div>
                <h2 className="mt-12 highlight">Purchase tokens</h2>
                <div className="my-2 italic">
                    To buy tokens add the amount of tez you want to spend in the field beneath.
                </div>
                <form onSubmit={handlers.fund}>
                    <Input value={amount} handler={handlers.amount} label="Tez amount for purchase" pattern="[0-9]+\.?[0-9]*|\.[0-9]+"/>
                    <Button className="mt-2" type="submit">Buy</Button>
                </form>
            </div>
            {
                showTransactionInspector && 
                <TransactionInspector 
                    address={context.address} 
                    hash={hashToCheck}
                    dataHandler={dataHandler}
                    error={error}
                    closeHandler={handlers.closeTransactionInspector}
                />
            }
        </div>
    );
}

Fund.auth = true;
