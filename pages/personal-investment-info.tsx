import Link from "next/link";

export default function PersonalInvestmentInfo() {
    return (
        <>
            <div className="mb-4">Personal Investment Info page</div>
            <Link href="/fund-withdraw">
                <div className="w-full h-80 bg-purple-400 cursor-pointer p-4 text-white text-3xl">Fund / Withdraw</div>
            </Link>
            <Link href="/transactions">
                <div className="w-full h-80 bg-blue-400 cursor-pointer p-4 text-white text-3xl">Transactions</div>
            </Link>
        </>
    );
}