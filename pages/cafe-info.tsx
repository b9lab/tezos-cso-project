import Image from "next/image";
import image from "../public/cafe-info.png";

export default function CafeInfo() {
    return (
        <div className="mb-8 px-8">
            <h1 className="mt-8">What is a CAFE?</h1>

            <div className="mt-6">
                <div>
                    A <span className="font-semibold">Continuous Agreement for Future Equity</span> (CAFE) is a <span className="font-semibold">programmable equity funding mechanism</span> envisioned to bring: <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;- increased long-term founder control <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;- higher liquidity for investors and access to new markets <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;- improved access to stakeholders to benefit from the financial success of a company <br/>
                    Through it, a company can financially align stakeholder interests with the success of a company.
                </div>
                <div className="mt-4">
                    CAFEs are an alternative to convertible notes and fixed-size equity rounds. Traditional fixed-size equity rounds take time especially start-ups often do not have as they need fast cash flows to continue growing and developing projects. At the same time, a CAFE makes a company’s equity programmable through a digitally automatable and scalable mechanism.
                </div>
                <div className="mt-4">
                    CAFEs offer the opportunity to conduct <span className="font-semibold">scalable high-resolution fundraising</span>, while also offering different prices to different investors depending on when the investment is done. <br/>
                    This frees the funding mechanism of market psychological group dynamics usually present in investor-driven funding: Investors tend to “wait and see” how others engage in an investment opportunity before investing, but in a CAFE, companies can better incentivise stakeholders that take the risk of investing early on.
                </div>
            </div>

            <div className="pt-12">
                <h2 className="mb-8">Determining the price for the CAFE token</h2>
                <div className="indent">
                    Once a CAFE is launched, qualified investors can engage at any point of time. The price is automated and non-negotiable. The initial <span className="font-semibold">price</span> is based on the valuation of the company. <br/>
                    After an initial period (i.e. when the minimum funding goal is met), it is based on a function of the number of issued tokens and the number of tokens bought (i.e. the invested amount). <br/>
                    The more tokens are issued, the higher the price is. Meaning, the earlier you invest, the more tokens you receive; the price per token rises with increasing token amount. Whereby, the <span className="font-semibold">amount of capital</span> is per se unlimited. The equity allocation of the CAFE can be increased but never decreased.
                </div>
                <div className="w-full mt-8">
                    <Image src={image} objectFit="contain" alt=""/>
                </div>
            </div>

            <div className="pt-12">
                <h2 className="mb-8">A fixed target equity percentage allocation and fixed dilution</h2>
                <div className="indent">
                    CAFEs have a <span className="font-semibold">fixed target equity percentage allocation</span> ensuring fixed dilution. There is no dilution from equity financing.<br/>
                    A fixed equity allocation helps founders maintain long-term control, as the claim bound to the token does not grant any governance rights, i.e. the token represents a non-voting share of future equity.<br/>
                    Independently how much equity a company raises in its financing rounds all investor claims remain the same collectively. For individual investors there is a certain degree of dilution as each token issued contributes to dilution, but it is predictable. This protects stakeholders from unknown and uncalculated equity dilutions.<br/>
                </div>
            </div>

            <div className="pt-12">
                <h2 className="mb-8">Converting tokens to equity – The CAFE’s termination</h2>
                <div>
                    Even though investors can buy and sell tokens as long as the CAFE is active, the question remains: When is a CAFE terminated?
                </div>
                <div className="mt-4">
                    Termination is automatic. A conversion to equity prior to the termination is possible in case of a <span className="font-semibold">liquidity event</span> or a <span className="font-semibold">dissolution event</span>, i.e. a <span className="font-semibold">triggering event</span> like an IPO, the company being sold, or bankruptcy. In both cases, investors are entitled to receive a payable amount in respect to their investment, i.e. amount of token. 
                </div>
            </div>

            <div className="pt-12">
                <h2 className="mb-8">Want to know more about CAFE?</h2>
                <div>
                    This is a list of helpful resources to have a peek at.<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a className="font-family-body font-semibold text-accent-1" href="https://fairmint-documents.s3.amazonaws.com/CAFE/CAFE+Template.docx" target="_blank" rel="noreferrer">Fairmint Inc.: Template for a Continuous Agreement for Future Equity</a> <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a className="font-family-body font-semibold text-accent-1" href="https://fairmint.co/cafe-continuous-agreement-for-future-equity/#what-differences-cafe-safe" target="_blank" rel="noreferrer">Fairmint Inc.: The CAFE FAQ </a> <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;- <a className="font-family-body font-semibold text-accent-1" href="https://github.com/C-ORG/whitepaper" target="_blank" rel="noreferrer">Thibauld Favre: Continuous Organizations White Paper </a> <br/>
                </div>
            </div>

        </div>
    );
}