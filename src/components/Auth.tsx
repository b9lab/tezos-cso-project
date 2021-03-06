import { signIn } from 'next-auth/client';
import React from "react";
import useSWR from 'swr';
import { SESSION_API_ENDPOINT } from '../constants';

export type AuthProps = {
    children: any,
    callbackUrl: string | undefined
}

/**
 * If not logged in redirects to the signin page
 */
export default function Auth(props: AuthProps) {
    const { data, error } = useSWR(SESSION_API_ENDPOINT);
      
    if (!error && !data) {
        return <div>Loading...</div>;
    }

    if (data?.user) {
        let contextData: AuthContextData = {
            username: data.user.name,
            address: data.address,
            country: data.country
        }
        return (
            <AuthContext.Provider value={contextData}>
                {props.children}
            </AuthContext.Provider>
        );
    } else {
        signIn('', {callbackUrl: props.callbackUrl});
        return null;
    }
}

export type AuthContextData = {
    username: string,
    address: string,
    country: string
}

/**
 * Common context to easily access to the username, address and country of the user
 */
export const AuthContext = React.createContext<AuthContextData>({
    username: "",
    address: "",
    country: ""
});
