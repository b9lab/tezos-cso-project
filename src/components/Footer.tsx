import Link from "next/link";
import React from "react";

/**
 * Main footer
 */
export default function Footer() {

    return (
        <div className="flex max-w-screen-lg m-auto justify-around py-12 px-8 footer">
            <a className="mr-2" href="https://tezos.b9lab.com" target="_blank" rel="noreferrer">Tezos Developer Portal</a>
            <Link href="/privacy" passHref>
                <a className="mr-2">Privacy Policy</a>
            </Link>
            <a className="mr-2" href="https://b9lab.com/Contact.html" target="_blank" rel="noreferrer">Contact</a>
            <a href="https://b9lab.com/" target="_blank" rel="noreferrer">B9lab</a>
        </div>
    )
}
