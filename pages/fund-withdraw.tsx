import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext, AuthContextData } from "../src/components/Auth";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import { FUND_MULTIPLIER, TRANSACTION_INSPECTOR_INITIAL_INTERVAL, TRANSACTION_INSPECTOR_MAX_INTERVAL, TRANSACTION_INSPECTOR_MAX_RETRY_COUNT } from "../src/constants";
import DataHandler from "../src/services/DataHandler";
import { FundDto, FundTokenInfoDto, UserTokenInfoDto, UserTransactionDto, WithdrawDto, WithdrawTokenInfoDto } from "../src/utils/dtos";
import { useData, useInterval } from "../src/utils/hooks";
import TezAmount from "../src/components/TezAmount";
import { format_date } from "../src/helpers";
import TokenAmount from "../src/components/TokenAmount";
import CtaCard from "../src/components/CtaCard";
import Modal from "../src/components/Modal";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import TransactionsTable from "../src/components/TransactionsTable";

enum ModalState {
    FUND,
    WITHDRAW,
    CLOSED
}

enum TransactionState {
    DRAFT,
    SUCCESS,
    ERROR,
    TIMEOUT,
    PENDING
}

function ProcessingButton() {
    return (
        <button className="max-w-sm rounded outline-none py-2 mt-2 px-5 cursor-not-allowed bg-dark-gray text-white" disabled>
            <h3 className="flex">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing
            </h3>
        </button>
    );
}

type CheckTransactionProp = {
    checkHandler: any
    timeoutHandler: any
}

function CheckTransaction(props: CheckTransactionProp) {
    useInterval(
        props.checkHandler,
        props.timeoutHandler,
        TRANSACTION_INSPECTOR_INITIAL_INTERVAL, 
        TRANSACTION_INSPECTOR_MAX_INTERVAL, 
        TRANSACTION_INSPECTOR_MAX_RETRY_COUNT
    );

    return (
        <div className="transaction-checker"></div>
    );
}

type TransactionErrorProp = {
    message: string,
}

function TransactionError(props: TransactionErrorProp) {
    return (
        <div className="transaction-error">
            <h1 className="mb-4">Transaction failed</h1>
            { props.message }
        </div>
    );
}

function TransactionTimeout() {
    return (
        <div className="transaction-timeout">
            <h1 className="mb-4">Transaction not confirmed yet</h1>
            <span>We suggest you to wait some time and check for it in the </span>
            <Link href="/personal-investment-info" passHref><a className="font-family-body font-semibold text-accent-1">Personal investment page</a></Link>
        </div>
    );
}

type TransactionSuccessProp = {
    transaction: UserTransactionDto
}

function TransactionSuccess(props: TransactionSuccessProp) {
    const router = useRouter();

    return (
        <div className="transaction-success">
            <h1 className="mb-4">Transaction completed successfully</h1>
            <TransactionsTable items={[props.transaction]}/>
            <div className="flex justify-center pt-8">
                <Button handler={() => router.reload()} color="accent-1">Ok</Button>
            </div>
        </div>
    );
}

type FundPageProp = {
    dataHandler: DataHandler,
    address: string,
    onError: (error: string) => void,
    onPending: (hash: string) => void
}

function FundPage(props: FundPageProp) {
    const data: FundTokenInfoDto = useData(props.dataHandler.getFundTokenInfo, props.address);
    const [amount, setAmount] = useState<string>('');
    const [waiting, setWaiting] = useState<boolean>(false);

    const handlers = {
        amount: (event: ChangeEvent<HTMLInputElement>): void => { 
            if (event.target.validity.valid) setAmount(event.target.value);
        },
        fund: (event: FormEvent) => {
            event.preventDefault();

            if (!amount) return;

            const fundAmount = parseFloat(amount) * FUND_MULTIPLIER;
            const fundDto: FundDto = {
                amount: fundAmount,
                accountAddress: props.address
            };
            props.dataHandler.fund(fundDto).then(props.onPending).catch((error: Error) => {
                props.onError(error.message);
            });

            setWaiting(true);
        }
    };

    return (
        <div>
            <h1>Buy TZM</h1>
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col mt-4">
                    <p>Current price</p>
                    <h1><TezAmount amount={data?.tokenBuyPrice}/></h1>
                </div>
                <div className="flex flex-col mt-4">
                    <p>Amount of tez in your account</p>
                    <h1><TezAmount amount={data?.tezCount}/></h1>
                </div>
            </div>
            <h2 className="mt-12 highlight">Purchase tokens</h2>
            <div className="my-2 italic">
                To buy tokens add the amount of tez you want to spend in the field beneath.
            </div>
            <form onSubmit={handlers.fund}>
                <Input value={amount} handler={handlers.amount} label="Tez amount for purchase" pattern="[0-9]+\.?[0-9]*|\.[0-9]+"/>
                {
                    waiting ? 
                    <ProcessingButton/> :
                    <Button className="mt-2" type="submit">Buy</Button>
                }
            </form>
        </div>
    );
}

type WithdrawPageProp = {
    dataHandler: DataHandler,
    address: string,
    onError: (error: string) => void,
    onPending: (hash: string) => void
}

function WithdrawPage(props: WithdrawPageProp) {
    const data: WithdrawTokenInfoDto = useData(props.dataHandler.getWithdrawTokenInfo, props.address);
    const [amount, setAmount] = useState<string>('');
    const [waiting, setWaiting] = useState<boolean>(false);

    const handlers = {
        amount: (event: ChangeEvent<HTMLInputElement>): void => { 
            if (event.target.validity.valid) setAmount(event.target.value);
        },
        withdraw: (event: FormEvent) => {
            event.preventDefault();

            if (!amount) return;

            const withdrawAmount = parseInt(amount);
            const withdrawDto: WithdrawDto = {
                amount: withdrawAmount,
                accountAddress: props.address
            };
            props.dataHandler.withdraw(withdrawDto).then(props.onPending).catch((error: Error) => {
                props.onError(error.message);
            });

            setWaiting(true);
        }
    };

    return (
        <div>
            <h1>Sell TZM</h1>
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col mt-4">
                    <p>Current price</p>
                    <h1><TezAmount amount={data?.tokenSellPrice}/></h1>
                </div>
                <div className="flex flex-col mt-4">
                    <p>Amount of tez in your account</p>
                    <h1><TezAmount amount={data?.tezCount}/></h1>
                </div>
            </div>
            {
                new Date(data?.lockPeriod) > new Date() ? 
                (<div className="mt-12 italic">
                    You can not sell the tokens before the unlocking date, {format_date(data?.lockPeriod)}
                </div>) :
                (<>
                    <h2 className="mt-12 highlight">Sell tokens</h2>
                    <div className="my-2 italic">
                        Add the amount of tokens you want to sell in the field beneath.
                    </div>
                    <form onSubmit={handlers.withdraw}>
                        <Input value={amount} handler={handlers.amount} label="Amount of TZM tokens to sell" pattern="[0-9]*"/>
                        {
                            waiting ? 
                            <ProcessingButton/> :
                            <Button className="mt-2" type="submit">Sell</Button>
                        }
                    </form>
                </>)
            }
        </div>
    );
}

type TransactionModalProp = {
    closeHandler: any,
    dataHandler: DataHandler,
    address: string,
    type: ModalState
}

function TransactionModal(props: TransactionModalProp) {
    const [error, setError] = useState<string | null>(null);
    const [hashToCheck, setHashToCheck] = useState<string | null>(null);
    const [transactionConfirmed, setTransactionConfirmed] = useState<UserTransactionDto | null>(null);

    const [transactionState, setTransactionState] = useState<TransactionState>(TransactionState.DRAFT);

    const handlers = {
        checkTransaction: async () => {
            const transactions = await props.dataHandler.getUserTransactionData(props.address);
            const confirmedTransaction = transactions.find((transaction: UserTransactionDto) => {
                return transaction.hash == hashToCheck;
            });
            if (confirmedTransaction) {
                setTransactionConfirmed(confirmedTransaction);
                setTransactionState(TransactionState.SUCCESS);
            }
        },
        onTimeout: () => setTransactionState(TransactionState.TIMEOUT),
        onError: (error: string) => {
            setError(error);
            setTransactionState(TransactionState.ERROR);
        },
        onPending: (hash: string) => {
            setHashToCheck(hash);
            setTransactionState(TransactionState.PENDING);
        }
    };

    let content = null;

    switch (transactionState) {
        case(TransactionState.ERROR):
            content = (<TransactionError message={error!}/>);
            break;
        case(TransactionState.TIMEOUT):
            content = (<TransactionTimeout/>);
            break;
        case(TransactionState.SUCCESS):
            content = (<TransactionSuccess transaction={transactionConfirmed!}/>);
            break;
        default:
            content = (
                <div>
                    {
                        props.type == ModalState.FUND ? 
                        <FundPage dataHandler={props.dataHandler} address={props.address} onError={handlers.onError} onPending={handlers.onPending}/> :
                        <WithdrawPage dataHandler={props.dataHandler} address={props.address} onError={handlers.onError} onPending={handlers.onPending}/>
                    }
                    {
                        transactionState == TransactionState.PENDING && 
                        <CheckTransaction checkHandler={handlers.checkTransaction} timeoutHandler={handlers.onTimeout} />
                    }
                </div>
            );
    }

    return (
        <Modal closeHandler={props.closeHandler}>
            {content}
        </Modal>
    );
}

export default function FundWithdraw() {
    const [modalState, setModalState] = useState<ModalState>(ModalState.CLOSED);
    const dataHandler = new DataHandler();
    const context: AuthContextData = useContext(AuthContext);
    const data: UserTokenInfoDto = useData(dataHandler.getUserTokenInfo, context.address);

    return (
        <div className="p-8">
            <h1>Buy and Sell TZM</h1>
            <div className="mt-2">
                Here you can buy or sell CAFE tokens for tez.
            </div>
            <h2 className="mt-8 highlight">Token information</h2>
            <div className="flex flex-wrap justify-between">
                <div className="w-full flex-grow sm:max-w-1/2 sm:pr-4">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Current price</p>
                        <h1><TezAmount amount={data?.tokenBuyPrice}/></h1>
                    </div>
                </div>
                <div className="w-full flex-grow sm:max-w-1/2">
                    <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4">
                        <p>Amount of tokens owned</p>
                        <h1><TokenAmount amount={data?.tokensOwned}/></h1>
                    </div>
                </div>
                <CtaCard action={() => setModalState(ModalState.FUND)} text="Buy TZM now &#8594;" title="Invest" classes="sm:pr-4"/>
                <CtaCard action={() => setModalState(ModalState.WITHDRAW)} text="Sell TZM now &#8594;" title="Withdraw"/>
            </div>
            {
                modalState != ModalState.CLOSED &&
                <TransactionModal closeHandler={() => setModalState(ModalState.CLOSED)} dataHandler={dataHandler} address={context.address} type={modalState} />
            }
        </div>
    );
}

FundWithdraw.auth = true;
