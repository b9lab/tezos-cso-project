import Link from "next/link";

export default function GeneralInvestmentInfo() {
    return (
        <>
            <div className="mb-4">General Investment Info page</div>
            <Link href="/cafe-details">
                <div className="w-full h-80 bg-purple-400 cursor-pointer p-4 text-white text-3xl">Cafe details</div>
            </Link>
        </>
    );
}