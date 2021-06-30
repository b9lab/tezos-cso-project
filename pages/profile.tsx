import { signOut } from 'next-auth/client';
import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';

const apiEndpoint = '/api/users/profile';

export default function Profile() {
    const { data, error } = useSWR(apiEndpoint);
    const [inputName, setInputName] = useState<string>();

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    const username = data.name;

    const updateHandler = () => {
        fetch(apiEndpoint, { method: 'PUT', body: JSON.stringify({ name: inputName})}).then(res => res.json()).then(user => {
            setInputName(user.name);
        });
    };

    const usernameHandler = (event: ChangeEvent<HTMLInputElement>): void => setInputName(event.target.value);

    return (
        <div className="flex flex-col items-center my-20 w-full">
            <label className="mx-2 w-full">Username</label>
            <input
                className="rounded p-2 m-2 border w-full"
                type="text"
                value={inputName ?? username}
                onChange={usernameHandler}
            />
            <button className="max-w-sm rounded bg-gray-400 py-2 px-6 m-2 text-white" onClick={updateHandler}>Update</button>
            <button className="py-2 px-6 m-2" onClick={() => signOut({callbackUrl: '/'})}>Sign out</button>
        </div>
    );
}

Profile.auth = true;
