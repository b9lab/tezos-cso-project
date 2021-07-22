import React, { ChangeEvent, useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import DataHandler from "../src/services/DataHandler";
import { WithdrawDto, WithdrawTokenInfoDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";
import TezAmount from "../src/components/TezAmount";
import TransactionInspector from "../src/components/TransactionInspector";
import { format_date } from "../src/helpers";

export default function Withdraw() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: WithdrawTokenInfoDto = useData(dataHandler.getWithdrawTokenInfo, context.address);
    const [amount, setAmount] = useState<string>('');
    const [hashToCheck, setHashToCheck] = useState<string | null>(null);

    const handlers = {
        amount: (event: ChangeEvent<HTMLInputElement>): void => {
            if (event.target.validity.valid) setAmount(event.target.value);
        },
        withdraw: () => {
            if (!amount) return;

            const withdrawAmount = parseInt(amount);
            const withdrawDto: WithdrawDto = {
                amount: withdrawAmount,
                accountAddress: context.address
            };
            dataHandler.withdraw(withdrawDto).then(setHashToCheck).catch(console.error);
        },
    };

    return (
        <div>
            <div className="p-8">
                <h1>Withdraw</h1>
                <div className="mt-2">
                    Here you can sell your CAFE tokens for tez.
                </div>
                <h2 className="mt-8 highlight">Token sell information</h2>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Current sell price</p>
                            <h1><TezAmount amount={data?.tokenSellPrice}/></h1>
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
                            <p>Unlocking date / sell date</p>
                            <h1>{format_date(data?.lockPeriod)}</h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Amount of tez in reserve</p>
                            <h1><TezAmount amount={data?.reserveAmount}/></h1>
                        </div>
                    </div>
                </div>
                <h2 className="mt-12 highlight">Sell tokens</h2>
                <div className="mt-2">
                    <Input value={amount} handler={handlers.amount} label="Amount of tokens to sell" pattern="[0-9]*"/>
                    <Button className="mt-2" handler={handlers.withdraw}>Sell</Button>
                </div>
            </div>
            {
                hashToCheck && 
                <TransactionInspector 
                    address={context.address} 
                    hash={hashToCheck} 
                    handler={dataHandler}
                />
            }
        </div>
    );
}

Withdraw.auth = true;
