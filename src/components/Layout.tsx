import React from "react";
import Head from "./Head";
import Header from "./Header";

type LayoutProps = {
    children: any
};

function Layout(props: LayoutProps) {
    return (
        <>
            <Head/>
            <Header/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;