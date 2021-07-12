import Link from "next/link";
import { useContext } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import DataHandler from "../src/services/DataHandler";
import { UserInvestmentDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";

export default function PersonalInvestmentInfo() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: UserInvestmentDto = useData(dataHandler.getUserInvestmentData, context.address);

    return (
        <>
            <div className="mb-4 font-bold">Personal Investment Info page</div>
            <div className="mb-4">
                tez invested: {data?.tezInvested} <br/>
                tokens owned: {data?.tokensOwned} <br/>
                token buy price: {data?.tokenBuyPrice} <br/>
                token sell price: {data?.tokenSellPrice}
            </div>
            <Link href="/fund">
                <div className="w-full h-80 bg-purple-400 cursor-pointer p-4 text-white text-3xl">Fund</div>
            </Link>
            <Link href="/withdraw">
                <div className="w-full h-80 bg-indigo-400 cursor-pointer p-4 text-white text-3xl">Withdraw</div>
            </Link>
            <Link href="/transactions">
                <div className="w-full h-80 bg-blue-400 cursor-pointer p-4 text-white text-3xl">Transactions</div>
            </Link>
        </>
    );
}

PersonalInvestmentInfo.auth = true;