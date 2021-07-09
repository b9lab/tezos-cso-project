import React, { ChangeEvent, useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import { FUND_MULTIPLIER } from "../src/constants";
import DataHandler from "../src/services/DataHandler";
import { FundDto, FundTokenInfoDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";

export default function Fund() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: FundTokenInfoDto = useData(dataHandler.getFundTokenInfo, context.address);
    const [amount, setAmount] = useState<string>('');

    const handlers = {
        amount: (event: ChangeEvent<HTMLInputElement>): void => { 
            if (event.target.validity.valid) setAmount(event.target.value);
        },
        fund: () => {
            const fundAmount = parseFloat(amount) * FUND_MULTIPLIER;
            const fundDto: FundDto = {
                amount: fundAmount,
                accountAddress: context.address
            };
            dataHandler.fund(fundDto);
        },
    };

    return (
        <div className="mb-4">
            <h1 className="font-bold">Fund token info:</h1>
            <div className="mb-4">
                token buy price: {data?.tokenBuyPrice} <br/>
                lock period: {data?.lockPeriod}
            </div>
            <Input value={amount} handler={handlers.amount} label="Amount" pattern="[0-9]+\.?[0-9]*|\.[0-9]+"/>
            <Button handler={handlers.fund}>Fund</Button>
        </div>
    );
}

Fund.auth = true;