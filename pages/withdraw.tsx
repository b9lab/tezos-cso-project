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
            <div className="p-4">
                <h1 className="pt-4">Withdraw</h1>
                <div className="w-full mt-6 body-text-large italic">
                    Token Info
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Sell price</p>
                            <h1><TezAmount amount={data?.tokenSellPrice}/></h1>
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
                            <p>Unlocking date / sell date</p>
                            <h1>{format_date(data?.lockPeriod)}</h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Reserve amount</p>
                            <h1><TezAmount amount={data?.reserveAmount}/></h1>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-8 body-text-large italic">
                    Sell Tokens
                </div>
                <div>
                    <Input value={amount} handler={handlers.amount} label="Amount" pattern="[0-9]*"/>
                    <Button handler={handlers.withdraw}>Withdraw</Button>
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
