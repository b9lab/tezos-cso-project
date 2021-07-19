import { useContext } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import DataHandler from "../src/services/DataHandler";
import { UserInvestmentDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";
import TezAmount from "../src/components/TezAmount";

export default function PersonalInvestmentInfo() {
    const context: AuthContextData = useContext(AuthContext);
    const dataHandler = new DataHandler();
    const data: UserInvestmentDto = useData(dataHandler.getUserInvestmentData, context.address);

    return (
        <div className="p-4">
            <h1 className="pt-4">My investment</h1>
            <div className="w-full mt-6 body-text-large italic">
                Portfolio
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Tokens owned</p>
                        <h1>{data?.tokensOwned}</h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Tezos invested</p>
                        <h1><TezAmount amount={data?.tezInvested}/></h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Price info</p>
                        <h1><TezAmount amount={data?.tokenBuyPrice}/></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

PersonalInvestmentInfo.auth = true;