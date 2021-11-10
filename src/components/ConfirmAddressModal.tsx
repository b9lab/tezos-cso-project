import React, { useEffect, useState } from "react";
import { mutate } from "swr";
import { contract } from "../../tezos-app-project";
import { PROFILE_API_ENDPOINT, SESSION_API_ENDPOINT } from "../constants";
import Button from "./Button";
import Modal from "./Modal";

export type ConfirmAddressModalProp = {
    successHandler?: (address: string) => void,
    address: string | null
}

/**
 * Modal that asks to confirm the wallet address
 */
export default function ConfirmAddressModal(props: ConfirmAddressModalProp) {
    const [modalOpened, setModalOpened] = useState<boolean>(!props.address);

    useEffect(() => {
        setModalOpened(!props.address);
    }, [props.address]);

    const updateUser = (user: any) => {
        fetch(PROFILE_API_ENDPOINT, { method: 'PUT', body: JSON.stringify(user)}).then(() => {
            mutate(SESSION_API_ENDPOINT);
            mutate(PROFILE_API_ENDPOINT);
        });
    };

    // forces wallet address modal confirmation
    const fetchAndSaveAddress = () => contract.updatePermission().then((address: string) => {
        setModalOpened(false);
        updateUser({ address: address });
        if (props.successHandler) props.successHandler(address);
    }).catch(console.error);

    return (
        <>
            {
                modalOpened &&
                <Modal closeHandler={() => setModalOpened(false)}>
                    <div className="confirm-address-modal flex flex-col">
                        <h1 className="mb-4">Setup account</h1>
                        <span>Please connect your wallet account with your profile to complete the signup.</span>
                        <span>This will allow you to see your transactions even when not logged in to your wallet in the future.</span>
                        <div className="w-full flex justify-end mt-4 ">
                            <Button className="fetch-address-button" type="button" handler={fetchAndSaveAddress}>Fetch address</Button>
                        </div>
                    </div>
                </Modal>
            }
        </>
    );
}
