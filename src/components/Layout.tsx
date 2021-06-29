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
                <div className="max-w-screen-lg m-auto p-4">
                    {props.children}
                </div>
            </main>
        </>
    );
}

export default Layout;