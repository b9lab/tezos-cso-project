import { signIn } from 'next-auth/client';
import React from "react";
import useSWR from 'swr';

type AuthProps = {
    children: any,
    callbackUrl: string | undefined
};

export default function Auth(props: AuthProps) {
    const { data, error } = useSWR('/api/auth/session');
      
    if (!error && !data) {
        return <div>Loading...</div>;
    }

    if (data?.user) {
        return (
            <AuthContext.Provider value={data.address}>
                {props.children}
            </AuthContext.Provider>
        );
    } else {
        signIn('', {callbackUrl: props.callbackUrl});
        return null;
    }
}

export const AuthContext = React.createContext<string>("");
