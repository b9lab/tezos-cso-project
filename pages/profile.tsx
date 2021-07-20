import { signOut } from 'next-auth/client';
import React, { ChangeEvent, useState } from 'react';
import useSWR, { mutate } from 'swr';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import { contract } from '../tezos-app-project';

const apiEndpoint = '/api/users/profile';

export default function Profile() {
    const { data, error } = useSWR(apiEndpoint);
    const [inputName, setInputName] = useState<string>();
    const [inputCountry, setInputCountry] = useState<string>();
    const [inputAddress, setInputAddress] = useState<string>();

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    const nameStored = data.name ?? '';
    const countryStored = data.country ?? '';
    const addressStored = data.address ?? '';
    const emailStored = data.email;

    const updateUser = (user: any) => {
        fetch(apiEndpoint, { method: 'PUT', body: JSON.stringify(user)}).then(() => mutate('/api/auth/session'));
    };

    const handlers = {
        name: (event: ChangeEvent<HTMLInputElement>): void => setInputName(event.target.value),
        country: (event: ChangeEvent<HTMLInputElement>): void => setInputCountry(event.target.value),
        address: (event: ChangeEvent<HTMLInputElement>): void => setInputAddress(event.target.value),
        signOut: () => signOut({callbackUrl: '/'}),
        update: () => updateUser({ name: inputName, country: inputCountry, address: inputAddress}),
        fetchAndSaveAddress: () => contract.user().then((address: string) => {
            setInputAddress(address);
            updateUser({ address: address });
            mutate('/api/auth/session');
        })
    };

    if (!inputAddress && !addressStored) handlers.fetchAndSaveAddress();

    return (
        <div className="flex flex-col items-center my-20 w-full">
            <Input value={emailStored} readOnly={true} label="Email"/>
            <Input value={inputName ?? nameStored} handler={handlers.name} label="Username"/>
            <Input value={inputCountry ?? countryStored} handler={handlers.country} label="Country"/>
            <div className="flex w-full items-end">
                <Input value={inputAddress ?? addressStored} handler={handlers.address} label="Address"/>
                <Button handler={handlers.fetchAndSaveAddress}>Fetch</Button>
            </div>
            
            <Button handler={handlers.update}>Update</Button>
            <button className="py-2 px-6 m-2" onClick={handlers.signOut}>Sign out</button>
        </div>
    );
}

Profile.auth = true;
