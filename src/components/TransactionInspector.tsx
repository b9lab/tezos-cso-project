import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { TRANSACTION_INSPECTOR_INITIAL_INTERVAL, TRANSACTION_INSPECTOR_MAX_INTERVAL, TRANSACTION_INSPECTOR_MAX_RETRY_COUNT } from "../constants";
import DataHandler from "../services/DataHandler";
import { UserTransactionDto } from "../utils/dtos";
import { useInterval } from "../utils/hooks";
import Button from "./Button";
import Modal from "./Modal";
import Link from "next/link";
import TransactionsTable from "./TransactionsTable";

type TransactionInspectorProp = {
    address: string,
    dataHandler: DataHandler,
    closeHandler: () => void
    hash: string | null,
    error: string | null
}

type ConfirmedModalProp = {
    closeHandler: any,
    transaction: UserTransactionDto
}

type ProcessingModalProp = {
    checkHandler: any
    timeoutHandler: any
}

type ErrorModalProp = {
    title: string,
    children: any,
    closeHandler: () => void
}

function ProcessingModal(props: ProcessingModalProp) {
    const [modalOpened, setModalOpened] = useState<boolean>(true);
    useInterval(
        props.checkHandler,
        props.timeoutHandler,
        TRANSACTION_INSPECTOR_INITIAL_INTERVAL, 
        TRANSACTION_INSPECTOR_MAX_INTERVAL, 
        TRANSACTION_INSPECTOR_MAX_RETRY_COUNT
    );

    return (
        <>
            {
                modalOpened &&
                <Modal closeHandler={() => setModalOpened(false)}>
                    <div>
                        <h1 className="mb-4">Confirming transaction</h1>
                        <span>Wait until the new transaction is confirmed and public.</span>
                    </div>
                </Modal>
            }
        </>
    );
}

function ErrorModal(props: ErrorModalProp) {
    return (
        <Modal closeHandler={props.closeHandler}>
            <div>
                <h1 className="mb-4">{props.title}</h1>
                { props.children }
            </div>
        </Modal>
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
                        <TransactionsTable items={[props.transaction]}/>
                        <div className="flex justify-center pt-8">
                            <Button handler={closeHandler} color="accent-1">Ok</Button>
                        </div>
                    </div>
                </Modal>
            }
        </>
    );
}

function CreatingModal() {
    const [modalOpened, setModalOpened] = useState<boolean>(true);

    return (
        <>
            {
                modalOpened &&
                <Modal closeHandler={() => setModalOpened(false)}>
                    <div>
                        <h1 className="mb-4">Creating transaction</h1>
                        <span>The request is being sent, waiting to be accepted</span>
                    </div>
                </Modal>
            }
        </>
    );
}

function TransactionInspector(props: TransactionInspectorProp) {
    const [confirmedTransaction, setConfirmedTransaction] = useState<UserTransactionDto | null>(null);
    const [timeout, setTimeout] = useState<boolean>(false);
    const router = useRouter();

    const handlers = {
        checkTransaction: async () => {
            const transactions = await props.dataHandler.getUserTransactionData(props.address);
            const confirmedTransaction = transactions.find((transaction: UserTransactionDto) => {
                return transaction.hash == props.hash;
            });
            if (confirmedTransaction) setConfirmedTransaction(confirmedTransaction);
        },
        onConfirmedModalClose: () => router.reload(),
        onTimeout: () => setTimeout(true)
    }

    if (props.error) {
        return (
            <ErrorModal title="Transaction cancelled" closeHandler={props.closeHandler}>
                <span>{props.error}</span>
            </ErrorModal>
        );
    } else if (timeout) {
        return (
            <ErrorModal title="The transaction isn&apos;t confirmed yet" closeHandler={props.closeHandler}>
                <span>We suggest you to wait some time and check for it in the </span>
                <Link href="/transactions" passHref><a className="font-family-body font-semibold text-accent-1">Transactions page</a></Link>
            </ErrorModal>
        );
    } else if (props.hash == null) {
        return (<CreatingModal/>);
    } else if (confirmedTransaction == null) {
        return (<ProcessingModal checkHandler={handlers.checkTransaction} timeoutHandler={handlers.onTimeout}/>);
    } else {
        return (<ConfirmedModal closeHandler={handlers.onConfirmedModalClose} transaction={confirmedTransaction}/>);
    }
}

export default TransactionInspector;
