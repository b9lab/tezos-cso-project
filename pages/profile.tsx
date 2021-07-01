import { signOut } from 'next-auth/client';
import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';

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

    const handlers = {
        name: (event: ChangeEvent<HTMLInputElement>): void => setInputName(event.target.value),
        country: (event: ChangeEvent<HTMLInputElement>): void => setInputCountry(event.target.value),
        address: (event: ChangeEvent<HTMLInputElement>): void => setInputAddress(event.target.value),
        signOut: () => signOut({callbackUrl: '/'}),
        update: () => {
            fetch(apiEndpoint, { method: 'PUT', body: JSON.stringify({ name: inputName, country: inputCountry, address: inputAddress})}).then(res => res.json()).then(user => {
                setInputName(user.name);
            });
        }
    };

    return (
        <div className="flex flex-col items-center my-20 w-full">
            <label className="mx-2 w-full">Email</label>
            <input
                className="p-2 m-2 w-full rounded border text-gray-500 cursor-not-allowed focus:outline-none"
                type="text"
                value={emailStored}
                readOnly
            />
            <label className="mx-2 w-full">Username</label>
            <input
                className="rounded p-2 m-2 border w-full"
                type="text"
                value={inputName ?? nameStored}
                onChange={handlers.name}
            />
            <label className="mx-2 w-full">Country</label>
            <input
                className="rounded p-2 m-2 border w-full"
                type="text"
                value={inputCountry ?? countryStored}
                onChange={handlers.country}
            />
            <label className="mx-2 w-full">Address</label>
            <input
                className="rounded p-2 m-2 border w-full"
                type="text"
                value={inputAddress ?? addressStored}
                onChange={handlers.address}
            />
            <button className="max-w-sm rounded bg-gray-400 py-2 px-6 m-2 text-white" onClick={handlers.update}>Update</button>
            <button className="py-2 px-6 m-2" onClick={handlers.signOut}>Sign out</button>
        </div>
    );
}

Profile.auth = true;
