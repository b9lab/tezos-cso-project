import Link from "next/link";
import React from "react";

type CtaCardProps = {
    href: string,
    text: string,
    label: string
};

function CtaCard(props: CtaCardProps) {

    return (
        <div className="w-full flex-grow sm:max-w-1/2 ">
            <Link href={props.href}>
                <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4 border border-accent-1 cursor-pointer">
                    <p>{props.label}</p>
                    <h2 className="text-accent-1 my-2">{props.text}</h2>
                </div>
            </Link>
        </div>
    );
}

export default CtaCard;
