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
        <div className="flex flex-coulmn">
            <label className="">Username</label>
            <input
                className=""
                type="text"
                value={inputName ?? username}
                onChange={usernameHandler}
            />
            <button onClick={updateHandler}>Update</button>
        </div>
    );
}

Profile.auth = true;
