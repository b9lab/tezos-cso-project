import React, { ChangeEvent, useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import DataHandler from "../src/services/DataHandler";
import { WithdrawDto, WithdrawTokenInfoDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";

export default function Withdraw() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: WithdrawTokenInfoDto = useData(dataHandler.getWithdrawTokenInfo, context.address);
    const [amount, setAmount] = useState<string>('');

    const handlers = {
        amount: (event: ChangeEvent<HTMLInputElement>): void => { 
            if (event.target.validity.valid) setAmount(event.target.value);
        },
        withdraw: () => {
            const withdrawAmount = parseInt(amount);
            const withdrawDto: WithdrawDto = {
                amount: withdrawAmount,
                accountAddress: context.address
            };
            dataHandler.withdraw(withdrawDto);
        },
    };

    let unlockingDate = new Date(data.lockPeriod).toLocaleDateString('en-gb', { day: "2-digit", month: "short", year: "2-digit" });

    return (
        <div>
            <div className="bg-gray-100 p-4">
                <h1>Withdraw</h1>
                <div className="w-full mt-6 body-text-large italic">
                    Token Info
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Sell price</p>
                            <h1>ꜩ {data?.tokenSellPrice}</h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Tokens owned</p>
                            <h1>0</h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Unlocking date / sell date</p>
                            <h1>{unlockingDate}</h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Reserve amount</p>
                            <h1>0</h1>
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
        </div>
    );
}

Withdraw.auth = true;