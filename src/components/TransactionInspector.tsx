import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { FUND_PROCESSING_INITIAL_INTERVAL, FUND_PROCESSING_MAX_INTERVAL } from "../constants";
import DataHandler from "../services/DataHandler";
import { TransactionType, UserTransactionDto } from "../utils/dtos";
import { useInterval } from "../utils/hooks";
import Button from "./Button";
import Modal from "./Modal";
import TezAmount from "./TezAmount";

type TransactionProcessorProp = {
    address: string,
    hash: string,
    handler: DataHandler
}

type ConfirmedModalProp = {
    closeHandler: any,
    transaction: UserTransactionDto
}

type ProcessingModalProp = {
    checkHandler: any
}

function ProcessingModal(props: ProcessingModalProp) {
    const [modalOpened, setModalOpened] = useState<boolean>(true);
    useInterval(props.checkHandler, FUND_PROCESSING_INITIAL_INTERVAL, FUND_PROCESSING_MAX_INTERVAL);

    return (
        <>
            {
                modalOpened &&
                <Modal closeHandler={() => setModalOpened(false)}>
                    <div>
                        <h1 className="mb-4">The transaction is being processed</h1>
                        <span>Wait until the new transaction is confirmed and public.</span>
                    </div>
                </Modal>
            }
        </>
    );
}

function ConfirmedModal(props: ConfirmedModalProp) {
    const [modalOpened, setModalOpened] = useState<boolean>(true);
    const closeHandler = () => {
        setModalOpened(false);
        props.closeHandler();
    }

    return (
        <>
            {
                modalOpened &&
                <Modal closeHandler={closeHandler}>
                    <div>
                        <h1 className="mb-4">Transaction completed successfully</h1>
                        <div className="mt-6 w-full flex flex-col shadow-2xl rounded">
                            <div className="w-full flex justify-between bg-accent-1 text-white px-4 py-2 rounded-t">
                                <h3 className="w-1/4">Date</h3>
                                <h3 className="w-1/4">Type</h3>
                                <h3 className="w-1/4">Tez Amount</h3>
                                <h3 className="w-1/4">Token</h3>
                            </div>
                            <div className="w-full flex justify-between body-text-small bg-light-gray odd:bg-white py-2 px-4 last:rounded-b " key={props.transaction.hash}>
                                <p className="w-1/4">{props.transaction.date}</p>
                                <p className="w-1/4">{props.transaction.transactionType == TransactionType.Funding ? 'Funding' : 'Withdrawal'}</p>
                                <p className="w-1/4"><TezAmount amount={props.transaction.tezAmount} nostyle={true}/></p>
                                <p className="w-1/4">{props.transaction.tokenAmount}</p>
                            </div>
                        </div>
                        <div className="flex justify-center pt-8">
                            <Button handler={closeHandler} color="accent-1">Ok</Button>
                        </div>
                    </div>
                </Modal>
            }
        </>
    );
}

function TransactionInspector(props: TransactionProcessorProp) {
    const [confirmedTransaction, setConfirmedTransaction] = useState<UserTransactionDto | null>(null);
    const router = useRouter();

    const handlers = {
        checkTransaction: async () => {
            const transactions = await props.handler.getUserTransactionData(props.address);
            const confirmedTransaction = transactions.find((transaction: UserTransactionDto) => {
                return transaction.hash == props.hash;
            });
            if (confirmedTransaction) setConfirmedTransaction(confirmedTransaction);
        },
        onConfirmedModalClose: () => router.reload()
    }

    if (confirmedTransaction == null) {
        return (<ProcessingModal checkHandler={handlers.checkTransaction}/>);
    } else {
        return (<ConfirmedModal closeHandler={handlers.onConfirmedModalClose} transaction={confirmedTransaction}/>);
    }
}

export default TransactionInspector;
