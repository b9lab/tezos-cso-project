import ImageWrapper from "../src/components/ImageWrapper";
import priceImage from "../public/price-change.png";
import CtaCard from "../src/components/CtaCard";

/**
 * Rolling Simple Agreement for Future Equity page
 */
export default function CafeInfo() {
    return (
        <div className="pb-8">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Rolling Simple Agreement for Future Equity (Rolling SAFE)</h1>
                <p className="body-text-large italic">
                    Rolling SAFE, a continuous Equity offering
                </p>
            </div>

            <div className="mt-6 px-8">
                <p className="indent">
                    A Rolling SAFE is a rolling agreement for future equity, an upgrade on the classic SAFE created by Y Combinator 10 years ago.
                    The Rolling SAFE allows investors to invest in a company at any time, with an implied valuation that grows automatically as more funds are raised, benefitting investors who move quickly.
                </p>
                <p className="mt-4">
                    The Rolling SAFE is intented to streamline fundraising, freeing up time for Founders so that they can focus on what&#39;s important: doing business. 
                    Thus turning a company’s business momentum into fundraising momentum, providing it with more and more funds as things grow.
                </p>
                <p className="mt-4">
                    A <span className="font-semibold">Rolling SAFE</span> is a <span className="font-bold">specific implementation of a programmable equity (PEQ) financing mechanism</span> designed to raise from professional investors (VCs, angels, value-add operators) and aiming to be accessible to community as well.
                    It envisioned to bring:
                </p>
                <div>
                    <ul className="list-disc list-inside">
                    <li>increased long-term founder control,</li>
                    <li>higher liquidity for investors and access to new markets, and</li>
                    <li>improved access to stakeholders to benefit from the financial success of a company.</li>
                    </ul>
                </div>
                <p>
                    Through a Rolling SAFE, a company should be in a position to better financially align stakeholder interests with the success of a company.
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    Steps in a Rolling SAFE
                </h2>
                <p className="mt-4 indent">
                    A Rolling SAFE can be divided into three steps: the initialisation and start until the MFG is reached, the &quot;post-MFG&quot; phase in which the token price is determined by bonding curve, and the termination of the Rolling SAFE.
                </p>    
                <div>
                    <ol className="list-decimal list-inside">
                        <li>During <span className="font-semibold">initialisation</span> a company deploys a smart contract, sets a minimum funding goal (MFG), values the company, and creates the reserve with a set percentage of revenue being allocated to it.</li>
                        <li>While the <span className="font-semibold">offering runs</span>, tokens are issued/minted proportionally to the amount held in the reserve. Token holders (the investors) can buy and sell their tokens for market prices, as well as sell them directly to the reserve, i.e. redeem them by letting the reserve buy them back while the offering is active (not terminated).</li>
                        <li>When the <span className="font-semibold">offering ends</span>, all tokens in circulation are bought back by the company, similar to a traditional buyback.</li>
                    </ol>
                </div>
                <p>&nbsp;</p>
                <p>
                    A Rolling SAFE is initialised after the organization sets a MFG, after which the price function is determined by a bonding curve. While the MFG is not met, all investors can buy tokens at the same price, the funds are escrowed, and investors can withdraw their investment. 
                    As soon as the MFG is met and the bonding curve takes over, the funds are split, some sent to the cash reserve and the rest going to the organization issuing the Rolling SAFE.
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">Converting tokens to equity – Termination</h2>
                <p className="indent">
                    Even though investors can buy and sell tokens as long as the offering is active, the question remains: When is a Rolling SAFE terminated?
                </p>
                <p className="mt-4">
                    A conversion to equity prior to the termination is possible in case of a <span className="font-semibold">liquidity event</span> or a <span className="font-semibold">dissolution event</span>, i.e. a <span className="font-semibold">triggering event</span> like an IPO, the company being sold, or bankruptcy. In both cases, investors are entitled to receive a payable amount in respect to their investment, i.e. amount of token. 
                </p>
                <p className="mt-4">
                    The offering can run indefinitely, as long as the issuing organization does not <span className="font-bold">close</span> it. 
                    Termination is possible after a minimum period of time to which the organization committed. The minimum period of time can be increased anytime.
                    As the minimum period of time has to be set, transparency towards investors is maintained.
                </p>
                <p className="mt-4">
                    When the organization wants to close the offering, it has to pay an <span className="font-bold">exit fee</span>. 
                    This fee is calculated by multiplying the current issuance price of tokens with the number of outstanding tokens, i.e. tokens held by investors. 
                    The organization pays the exit fee and closes the offering. Then all investors can sell their tokens at the same price. 
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">Want to know more about Rolling Simple Agreements for Future Equity?</h2>
                <p>
                    This is a list of helpful resources to have a peek at.
                </p>
                <div>
                    <ul className="list-disc list-inside">
                    <li><a className="font-family-body font-semibold" href="https://fairmint-documents.s3.amazonaws.com/CAFE/CAFE+Template.docx" target="_blank" rel="noreferrer">Fairmint Inc.: Template for a Continuous Agreement for Future Equity</a></li>
                    <li><a className="font-family-body font-semibold" href="https://fairmint.co/cafe-continuous-agreement-for-future-equity/#what-differences-cafe-safe" target="_blank" rel="noreferrer">Fairmint Inc.: The CAFE FAQ </a></li>
                    <li><a className="font-family-body font-semibold" href="https://github.com/C-ORG/whitepaper" target="_blank" rel="noreferrer">Thibauld Favre: Continuous Organizations White Paper </a></li>
                    </ul>
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-between py-12 px-8">
                <CtaCard href="https://tezos.b9lab.com/cso-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Ready to dive into the specifics of developing a Rolling SAFE with Tezos?" classes="sm:pr-2"/>
                <CtaCard href="/cafe-details" text="Next page &#8594;" title="Ready to continue?" classes="sm:pl-2"/>
            </div>

        </div>
    );
}
