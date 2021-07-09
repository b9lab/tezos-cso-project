import { useContext } from "react";
import { AuthContext } from "../src/components/Auth";
import DataHandler from "../src/services/DataHandler";
import { FundTokenInfoDto, WithdrawTokenInfoDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";

function FundTokenInfo() {
    const address = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: FundTokenInfoDto = useData(dataHandler.getFundTokenInfo, address);

    return (
        <div className="mb-4">
            <h1 className="font-bold">Fund token info:</h1>
            <div>
                token buy price: {data?.tokenBuyPrice} <br/>
                lock period: {data?.lockPeriod}
            </div>
        </div>
    );
}

function WithdrawTokenInfo() {
    const address = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: WithdrawTokenInfoDto = useData(dataHandler.getWithdrawTokenInfo, address);

    return (
        <div className="mb-4">
            <h1 className="font-bold">Withdraw token info:</h1>
            <div>
                token sell price: {data?.tokenSellPrice} <br/>
                tokens owned: {data?.tokensOwned} <br/>
                lock period: {data?.lockPeriod}
            </div>
        </div>
    );
}

export default function FundWithdraw() {
    return (
        <>
            <FundTokenInfo/>
            <WithdrawTokenInfo/>
        </>
    );
}

FundWithdraw.auth = true;