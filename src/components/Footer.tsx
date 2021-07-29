import Link from "next/link";
import React from "react";

function Footer() {

    return (
        <div className="flex w-full justify-around py-12 px-8">
            <Link href="/privacy" passHref>
                <a>Privacy Policy</a>
            </Link>
            <a href="https://b9lab.com/Contact.html" target="_blank" rel="noreferrer">Contact</a>
        </div>
    )
}

export default Footer;
