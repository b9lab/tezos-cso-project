import Link from "next/link";
import React from "react";

type CtaCardProps = {
    title: string,
    text: string,
    href?: string,
    action?: any,
    classes?: string
};

function CtaCard(props: CtaCardProps) {

    const content = (
        <div className="bg-white rounded shadow-2xl flex flex-col p-4 mt-4 border border-accent-1 cursor-pointer ">
            <p>{props.title}</p>
            <h2 className="text-accent-1 my-2">{props.text}</h2>
        </div>
    );

    if (props.href) {
        return (
            <div className={"w-full flex-grow sm:max-w-1/2 " + (props.classes ?? "")}>
                <Link href={props.href}>
                    {content}
                </Link>
            </div>
        );
    } else if (props.action) {
        return (
            <div className={"w-full flex-grow sm:max-w-1/2 " + (props.classes ?? "")}>
                <div onClick={props.action}>
                    {content}
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
}

export default CtaCard;
