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

    return (
        <div className="mb-4">
            <h1 className="font-bold">Withdraw token info:</h1>
            <div className="mb-4">
                token sell price: {data?.tokenSellPrice} <br/>
                tokens owned: {data?.tokensOwned} <br/>
                lock period: {data?.lockPeriod}
            </div>
            <Input value={amount} handler={handlers.amount} label="Amount" pattern="[0-9]*"/>
            <Button handler={handlers.withdraw}>Withdraw</Button>
        </div>
    );
}

Withdraw.auth = true;