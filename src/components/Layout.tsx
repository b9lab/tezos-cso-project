import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";

export type LayoutProps = {
    children: any
}

/**
 * Main layout
 */
export default function Layout(props: LayoutProps) {
    return (
        <div className="text-dark-gray">
            <Head/>
            <Header/>
            <main className="bg-white">
                <div className="max-w-screen-lg m-auto">
                    {props.children}
                </div>
            </main>
            <Footer/>
        </div>
    );
}
