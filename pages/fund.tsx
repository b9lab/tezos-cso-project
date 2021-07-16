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
        <div>
            <div className="bg-gray-100 p-4">
                <h1>Fund</h1>
                <div className="w-full mt-6 body-text-large italic">
                    Token Info
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Buy price</p>
                            <h1>ꜩ {data?.tokenBuyPrice}</h1>
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
                            <p>Tezos in account</p>
                            <h1>0</h1>
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
        </div>
    );
}

Fund.auth = true;