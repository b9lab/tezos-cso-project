import Link from "next/link";
import React from "react";

function Footer() {

    return (
        <div className="flex max-w-screen-lg m-auto justify-around py-12 px-8 footer">
            <a href="https://tezos.b9lab.com" target="_blank" rel="noreferrer">Tezos Developer Portal</a>
            <Link href="/privacy" passHref>
                <a>Privacy Policy</a>
            </Link>
            <a href="https://b9lab.com/Contact.html" target="_blank" rel="noreferrer">Contact</a>
            <a href="https://b9lab.com/" target="_blank" rel="noreferrer">B9lab</a>
        </div>
    )
}

export default Footer;
