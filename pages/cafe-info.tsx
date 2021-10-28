import ImageWrapper from "../src/components/ImageWrapper";
import priceImage from "../public/price-change.png";
import CtaCard from "../src/components/CtaCard";

/**
 * Continuous Agreement for Future Equity page
 */
export default function CafeInfo() {
    return (
        <div className="pb-8">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Continuous Agreement for Future Equity (CAFE)</h1>
                <div className="body-text-large italic">
                    A programmable equity (PEQ) mechanism as a continuous offering
                </div>
            </div>

            <div className="mt-6 px-8">
                <div>
                    A continuous agreement for future equity (CAFE) is an alternative to convertible notes and fixed-size equity rounds. Traditional fixed-size equity rounds take time especially start-ups often do not have, as they need fast cash flows to continue growing and developing projects. 
                    At the same time, a CAFE makes a company’s equity programmable through a digitally automatable and scalable mechanism.
                </div>
                <div className="mt-4">
                    Continuous agreements for future equity offer the opportunity to conduct <span className="font-semibold">scalable high-resolution fundraising</span>, while also offering different prices to different investors depending on when the investment is done. <br/>
                    This frees the financing mechanism of market psychological group dynamics usually present in investor-driven funding: Investors tend to “wait and see” how others engage in an investment opportunity before investing, but in a CAFE, companies can better incentivise stakeholders that take the risk of investing early on.
                </div>
                <div className="mt-4">
                    A <span className="font-semibold">CAFE</span> is a <span className="font-bold">particular use case of a programmable equity (PEQ) financing mechanism</span> envisioned to bring:
                </div>
                <div>
                    <ul className="list-disc list-inside">
                    <li>increased long-term founder control,</li>
                    <li>higher liquidity for investors and access to new markets, and</li>
                    <li>improved access to stakeholders to benefit from the financial success of a company.</li>
                    </ul>
                </div>
                <div>
                    Through a CAFE, a company can financially align stakeholder interests with the success of a company.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    Steps in a CAFE
                </h2>
                <div className="mt-4">
                    A CAFE can be divided into three steps: the initialisation and start until the MFG is reached, the &quot;post-MFG&quot; phase in which the token price is determined by bonding curve, and the termination of the CAFE.
                </div>    
                <div>
                    <ol className="list-decimal list-inside">
                        <li>During <span className="font-semibold">initialisation</span> a company deploys a smart contract, sets a minimum funding goal (MFG), values the company, and creates the reserve with a set percentage of revenue being allocated to it.</li>
                        <li>While the <span className="font-semibold">offering runs</span>, tokens are issued/minted proportionally to the amount held in the reserve. Token holders (the investors) can buy and sell their tokens for market prices, as well as sell them directly to the reserve, i.e. redeem them by letting the reserve buy them back while the offering is active (not terminated).</li>
                        <li>When the <span className="font-semibold">offering ends</span>, all tokens in circulation are bought back by the company, similar to a traditional buyback.</li>
                    </ol>
                </div>
                <div className="indent">
                    A CAFE is initialised after the organization sets a MFG, after which the price function is determined by a bonding curve. While the MFG is not met, all investors can buy tokens at the same price, the funds are escrowed, and investors can withdraw their investment. 
                    As soon as the MFG is met and the bonding curve takes over, the funds are split, some sent to the cash reserve and the rest going to the organization issuing the CAFE.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">Converting tokens to equity – Termination</h2>
                <div className="indent">
                    Even though investors can buy and sell tokens as long as the offering is active, the question remains: When is a CAFE terminated?
                </div>
                <div className="mt-4">
                    A conversion to equity prior to the termination is possible in case of a <span className="font-semibold">liquidity event</span> or a <span className="font-semibold">dissolution event</span>, i.e. a <span className="font-semibold">triggering event</span> like an IPO, the company being sold, or bankruptcy. In both cases, investors are entitled to receive a payable amount in respect to their investment, i.e. amount of token. 
                </div>
                <div className="mt-4">
                    The offering can run indefinitely, as long as the issuing organization does not <span className="font-bold">close</span> it. 
                    Termination is possible after a minimum period of time to which the organization committed. The minimum period of time can be increased anytime.
                    As the minimum period of time has to be set, transparency towards investors is maintained.
                </div>
                <div className="mt-4">
                    When the organization wants to close the offering, it has to pay an <span className="font-bold">exit fee</span>. 
                    This fee is calculated by multiplying the current issuance price of tokens with the number of outstanding tokens, i.e. tokens held by investors. 
                    The organization pays the exit fee and closes the offering. Then all investors can sell their tokens at the same price. 
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">Want to know more about continuous agreements for future equity?</h2>
                <div>
                    This is a list of helpful resources to have a peek at.
                </div>
                <div>
                    <ul className="list-disc list-inside">
                    <li><a className="font-family-body font-semibold" href="https://fairmint-documents.s3.amazonaws.com/CAFE/CAFE+Template.docx" target="_blank" rel="noreferrer">Fairmint Inc.: Template for a Continuous Agreement for Future Equity</a></li>
                    <li><a className="font-family-body font-semibold" href="https://fairmint.co/cafe-continuous-agreement-for-future-equity/#what-differences-cafe-safe" target="_blank" rel="noreferrer">Fairmint Inc.: The CAFE FAQ </a></li>
                    <li><a className="font-family-body font-semibold" href="https://github.com/C-ORG/whitepaper" target="_blank" rel="noreferrer">Thibauld Favre: Continuous Organizations White Paper </a></li>
                    </ul>
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-between py-12 px-8">
                <CtaCard href="/https://tezos.b9lab.com/cso-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Ready to dive into the specifics of developing a CAFE with Tezos?" classes="sm:pr-2"/>
                <CtaCard href="/cafe-details" text="Next page &#8594;" title="Ready to continue?" classes="sm:pl-2"/>
            </div>

        </div>
    );
}
