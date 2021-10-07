import ImageWrapper from "../src/components/ImageWrapper";
import priceImage from "../public/price-change.png";

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
                    A continuous agreement for future equity (CAFE) is an alternative to convertible notes and fixed-size equity rounds. Traditional fixed-size equity rounds take time especially start-ups often do not have as they need fast cash flows to continue growing and developing projects. 
                    At the same time, a CAFE makes a company’s equity programmable through a digitally automatable and scalable mechanism.
                </div>
                <div className="mt-4">
                    Continuous agreements for future equity offer the opportunity to conduct <span className="font-semibold">scalable high-resolution fundraising</span>, while also offering different prices to different investors depending on when the investment is done. <br/>
                    This frees the funding mechanism of market psychological group dynamics usually present in investor-driven funding: Investors tend to “wait and see” how others engage in an investment opportunity before investing, but in a CAFE, companies can better incentivise stakeholders that take the risk of investing early on.
                </div>
                <div className="mt-4">
                    A <span className="font-semibold">(CAFE)</span> is a <span className="font-bold">particular use case of a programmable equity (PEQ) funding mechanism</span> envisioned to bring:
                </div>
                <div>
                    <ul>
                    <li>increased long-term founder control,</li>
                    <li>higher liquidity for investors and access to new markets, and</li>
                    <li>improved access to stakeholders to benefit from the financial success of a company.</li>
                    </ul>
                </div>
                <div>
                    Through it, a company can financially align stakeholder interests with the success of a company.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    Steps in a CAFE
                </h2>
                <div>
                    <ol>
                        <li>During <span className="font-semibold">initialisation</span> a company deploys a smart contract, sets a minimum funding goal, values the company, and creates the reserve with a set percentage of revenue being allocated to it.</li>
                        <li>While the <span className="font-semibold">offering runs</span>, tokens are issued/minted proportionally to the amount held in the reserve. Token holders (the investors) can buy and sell their tokens for market prices, as well as sell them directly to the reserve, i.e. redeem them by letting the reserve buy them back while the offering is active (not terminated).</li>
                        <li>When the <span className="font-semibold">offering ends</span>, all tokens in circulation are bought back by the company, similar to a traditional buyback.</li>
                    </ol>
                </div>
                <div className="indent">
                    A CAFE is initialised after the organization sets a minimum funding goal (MFG), after which the price function is determined by a bonding curve. While the MFG is not met, all investors can buy tokens at the same price, the funds are escrowed, and investors can withdraw their investment. 
                    As soon as the MFG is met and the bonding curve takes over, the funds are split, some sent to the cash reserve and the rest going to the organization.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    What is the reserve?
                </h2>
                <div className="mt-4">
                    Once the MFG is met the bonding curve begins its work. The smart contract issues tokens, which represent a financial right (claim) on the cash reserve. 
                    This reserve is managed by the smart contract and reflects the organization&apos;s revenues. 
                    So to say, the token represents a claim on the revenue of the organization.
                </div>
                <div className="mt-4">
                    When the organization begins to generate revenues, part of the revenues goes into the buyback reserve. 
                    In addition, the revenue begins to drive the price of the token.
                    This mechanism creates a clear incentive for investors to hold tokens until the organization begins generating revenues and the price begins to rise.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">Determining the price for the CAFE token</h2>
                <div className="indent">
                    Once the offering is launched, qualified investors can engage at any point of time. The <span className="font-semibold">price</span> is automated and non-negotiable.
                </div>
                <div className="w-full mt-8">
                    <ImageWrapper src={priceImage} alt=""/>
                </div>
                <div className="mt-4">                
                    The initial price is based on the valuation of the company. After an initial period (i.e. when the minimum funding goal is met), it is based on a function of the number of issued tokens and the number of tokens bought (i.e. the invested amount). <br/>                   
                    The more tokens are issued, the higher the price is. The earlier you invest, the more tokens you receive; the price per token rises with increasing token amount.
                </div>
                <div className="mt-4">                
                    Whereby, the <span className="font-semibold">amount of capital</span> is per se unlimited. The equity allocation of the continuous PEQ offering can be increased but never decreased.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">A fixed target equity percentage allocation and fixed dilution</h2>
                <div className="indent">
                    CAFEs have a <span className="font-semibold">fixed target equity percentage allocation</span>, because of to the percentage dedicated to the reserve, ensuring fixed dilution. 
                    Unlike when a company issues additional stock shares, the issuance of tokens and their value is fixed by the parameters of the CAFE&apos;s smart contract and the value investors hold is not reduced by the issuance of additional &quot;shares&quot; (tokens) as long as they hold their tokens up to the termination of the offering.
                    In a CAFE, investors&apos; risk is reduced as dilution is fixed and pre-determined. The organization can seek further equity without additional share issuance negatively affecting the value current investors hold. There is no dilution from equity financing.
                </div>
                <div className="mt-4">
                    A fixed equity allocation helps founders maintain long-term control, as the claim bound to the token does not grant any governance rights, i.e. the token represents a non-voting share of future equity.
                </div>
                <div className="mt-4"> 
                    Independently of how much equity a company raises in financing rounds, all investor claims remain collectively the same. For individual investors there is a certain degree of dilution as each token issued contributes to dilution, but it is predictable. 
                    This protects stakeholders from unknown and uncalculated equity dilutions.
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
                    <ul>
                    <li><a className="font-family-body font-semibold" href="https://fairmint-documents.s3.amazonaws.com/CAFE/CAFE+Template.docx" target="_blank" rel="noreferrer">Fairmint Inc.: Template for a Continuous Agreement for Future Equity</a></li>
                    <li><a className="font-family-body font-semibold" href="https://fairmint.co/cafe-continuous-agreement-for-future-equity/#what-differences-cafe-safe" target="_blank" rel="noreferrer">Fairmint Inc.: The CAFE FAQ </a></li>
                    <li><a className="font-family-body font-semibold" href="https://github.com/C-ORG/whitepaper" target="_blank" rel="noreferrer">Thibauld Favre: Continuous Organizations White Paper </a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
