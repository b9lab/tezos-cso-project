import Link from "next/link";
import React from "react";

function CtaCard() {

    return (
        <div className="w-full flex-grow sm:max-w-1/2 ">
            <Link href="/fund-withdraw">
                <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4 border border-accent-1 cursor-pointer">
                    <p>Invest in TZMINT</p>
                    <h2 className="text-accent-1 my-2">Buy TZM &#8594;</h2>
                </div>
            </Link>
        </div>
    );
}

export default CtaCard;
