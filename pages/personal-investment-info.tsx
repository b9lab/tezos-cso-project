import React, { useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import DataHandler from "../src/services/DataHandler";
import { TransactionType, UserInvestmentDto, UserTransactionDto } from "../src/utils/dtos";
import { useData } from "../src/utils/hooks";
import TezAmount from "../src/components/TezAmount";
import TransactionsTable from "../src/components/TransactionsTable";
import TokenAmount from "../src/components/TokenAmount";
import CtaCard from "../src/components/CtaCard";
import PriceBadge from "../src/components/PriceBadge";
import ConfirmAddressModal from "../src/components/ConfirmAddressModal";

/**
 * My investment page
 */
export default function PersonalInvestmentInfo() {
    const context: AuthContextData = useContext(AuthContext);
    const [address, setAddress] = useState<string>(context.address);
    const dataHandler = new DataHandler();
    const data: UserInvestmentDto = useData(dataHandler.getUserInvestmentData, address);
    const transactionList: Array<UserTransactionDto> = useData(dataHandler.getUserTransactionData, context.address);
    const [ typeFilter, setTypeFilter ] = useState<TransactionType | null>(null);
    const transactionFilter = (item: UserTransactionDto) => typeFilter == null || typeFilter === item.transactionType;

    return (
        <>
            <div className="p-8">
                <PriceBadge value={data?.tokenBuyPrice}/>
                <h1>My Investment</h1>
                <p className="mt-2">
                    Here you can find an overview of your investment in the Rolling SAFE
                </p>
                <h2 className="mt-8 highlight">Portfolio overview</h2>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Number of tokens owned</p>
                            <h1><TokenAmount amount={data?.tokensOwned}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pl-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Current token valuation</p>
                            <h1><TezAmount amount={data?.tokensOwned * data?.tokenSellPrice}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Tezos invested</p>
                            <h1><TezAmount amount={data?.tezInvested}/></h1>
                        </div>
                    </div>
                    <CtaCard href="/fund-withdraw" text="Buy TZM &#8594;" title="Invest in TZMINT Inc." classes="sm:pl-2"/>
                </div>
                {
                    (transactionList?.length > 0 && context.address)  &&
                    <>
                        <h2 className="mt-8 highlight">Transactions</h2>
                        <div className="body-text-small flex space-x-2 mb-4 pt-6 font-family-headline">
                            <div>Filter: </div>
                            <div 
                                className={ ( typeFilter == null ? "text-accent-1 " : "" ) + "cursor-pointer" } 
                                onClick={ () => setTypeFilter(null) }>
                                All
                            </div>
                            <p> | </p>
                            <div 
                                className={ ( typeFilter == TransactionType.Funding ? "text-accent-1 " : "" ) + "cursor-pointer" } 
                                onClick={ () => setTypeFilter(TransactionType.Funding) }>
                                Fund
                            </div>
                            <p> | </p>
                            <div 
                                className={ ( typeFilter == TransactionType.Withdrawal ? "text-accent-1 " : "" ) + "cursor-pointer" } 
                                onClick={ () => setTypeFilter(TransactionType.Withdrawal) }>
                                Withdraw
                            </div>
                        </div>
                        <TransactionsTable items={transactionList.filter(transactionFilter)}/>
                    </>
                }
                <h2 className="mt-8 highlight">Counters</h2>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pr-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Total amount of tez paid</p>
                            <h1><TezAmount amount={data?.totalFund}/></h1>
                        </div>
                    </div>
                    <div className="w-full flex-grow sm:max-w-1/2 sm:pl-2">
                        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                            <p>Total amount of tez withdrawn</p>
                            <h1><TezAmount amount={data?.totalWithdraw}/></h1>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-between my-8">
                    <CtaCard href="/https://tezos.b9lab.com/cso-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Ready to dive into the specifics of developing a Rolling SAFE with Tezos?" classes="sm:pr-2"/>
                    <CtaCard href="/fund-withdraw" text="Next page &#8594;" title="Want to buy and sell TZM?" classes="sm:pl-2"/>
                </div>
            </div>
            <ConfirmAddressModal address={context.address} successHandler={(address) => setAddress(address)}/>

        </>
    );
}

PersonalInvestmentInfo.auth = true;
