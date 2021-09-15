import { signOut } from 'next-auth/client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import useSWR, { mutate } from 'swr';
import Button from '../src/components/Button';
import ConfirmAddressModal from '../src/components/ConfirmAddressModal';
import Input from '../src/components/Input';
import { PROFILE_API_ENDPOINT, SESSION_API_ENDPOINT } from '../src/constants';
import { contract } from '../tezos-app-project';

export default function Profile() {
    const { data, error } = useSWR(PROFILE_API_ENDPOINT);
    const [inputName, setInputName] = useState<string>();
    const [inputCountry, setInputCountry] = useState<string>();
    const [inputAddress, setInputAddress] = useState<string>();

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    const nameStored = data.name ?? '';
    const countryStored = data.country ?? '';
    const addressStored = data.address ?? '';
    const emailStored = data.email ?? '';

    const updateUser = (user: any) => {
        fetch(PROFILE_API_ENDPOINT, { method: 'PUT', body: JSON.stringify(user)}).then(() => {
            mutate(SESSION_API_ENDPOINT);
            mutate(PROFILE_API_ENDPOINT);
        });
    };

    const handlers = {
        name: (event: ChangeEvent<HTMLInputElement>): void => setInputName(event.target.value),
        country: (event: ChangeEvent<HTMLInputElement>): void => setInputCountry(event.target.value),
        address: (event: ChangeEvent<HTMLInputElement>): void => setInputAddress(event.target.value),
        signOut: () => signOut({callbackUrl: '/'}),
        update: (event: FormEvent) => {
            event.preventDefault();
            updateUser({ name: inputName, country: inputCountry, address: inputAddress});
        },
        delete: () => fetch(PROFILE_API_ENDPOINT, { method: 'DELETE'}).then(() => mutate(SESSION_API_ENDPOINT)).catch(console.error),
        fetchAndSaveAddress: () => contract.updatePermission().then((address: string) => {
            updateUser({ address: address });
            setInputAddress(address);
        }).catch(console.error)
    };

    return (
        <>
            <form className="flex flex-col items-center w-full p-8" onSubmit={handlers.update}>
                <Input value={emailStored} readOnly={true} label="Email"/>
                <Input value={inputName ?? nameStored} handler={handlers.name} label="Username"/>
                <Input value={inputCountry ?? countryStored} handler={handlers.country} label="Country"/>
                <div className="flex w-full items-end">
                    <Input value={inputAddress ?? addressStored} handler={handlers.address} label="Address"/>
                    <Button className="ml-4 mb-4 fetch-address-button" type="button" handler={handlers.fetchAndSaveAddress}>Fetch</Button>
                </div>
                <Button className="m-4" type="submit">Update</Button>
                <button className="py-2 px-6 m-2" type="button" onClick={handlers.signOut}>Sign out</button>
                <button className="py-2 px-6" type="button" onClick={handlers.delete}>Delete account</button>
            </form>
            <ConfirmAddressModal successHandler={setInputAddress} address={addressStored || inputAddress}/>
        </>
    );
}

Profile.auth = true;
