import Link from "next/link";
import React from "react";

function Footer() {

    return (
        <div className="flex w-full justify-around py-12 px-8">
            <Link href="/privacy" passHref>
                <a>Privacy Policy</a>
            </Link>
            <Link href="/" passHref>
                <a>Contact</a>
            </Link>
        </div>
    )
}

export default Footer;
