import { signIn } from 'next-auth/client';
import React from "react";
import useSWR from 'swr';

type AuthProps = {
    children: any
};

export default function Auth(props: AuthProps) {
    const { data, error } = useSWR('/api/auth/session');
      
    if (!error && !data) {
        return <div>Loading...</div>;
    }

    if (data?.user) {
        return props.children;
    } else {
        signIn();
        return null;
    }
}
