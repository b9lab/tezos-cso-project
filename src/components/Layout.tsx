import React from "react";
import Head from "./Head";
import Header from "./Header";

type LayoutProps = {
    children: any
};

function Layout(props: LayoutProps) {
    return (
        <div className="text-dark-gray">
            <Head/>
            <Header/>
            <main>
                <div className="max-w-screen-lg m-auto">
                    {props.children}
                </div>
            </main>
        </div>
    );
}

export default Layout;