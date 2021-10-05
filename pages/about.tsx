import ImageWrapper from "../src/components/ImageWrapper";
import pricesCurveImage from '../public/buy-sell-function.png';
import organigramImage from '../public/organigram.png';

/**
 * Programmable Equity page
 */
export default function About() {
    return (
        <div className="pb-8">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Programmable Equity</h1>
                <div className="body-text-large italic">
                    Implementing a Programmable Equity (PEQ) offering on the Tezos blockchain as a continuous agreement for future equity.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    What is a programmable equity offering?
                </h2>
                <div className="indent">
                    In a programmable equity offering, security tokens are issued, which can for example represent a proportional share of a company&apos;s future revenue. 
                    Thus, it would not be equity-centered but revenue-focused, and bear the potential of aligning stakeholder interests with the financial success of a company.
                </div>
                <div className="mt-4">
                    Whereby, the company setting up the programmable equity is often called a <span className="font-semibold">continuous organisation</span> 
                    as the security tokens are offered continuously and not just during one instance. It funnels a part of its revenue, a fixed percentage, 
                    into a <span className="font-semibold">Decentralized Autonomous Trust (DAT)</span> during a pre-defined time period. 
                    A DAT is a <span className="font-semibold">smart contract</span> that automatically issues the tokenised security, and handles sales and buy backs.
                </div>
            </div>

            <div className="pt-12 px-8 flex justify-between flex-col sm:flex-row">
                <div className="sm:w-1/2 flex content-center">
                    <ImageWrapper src={organigramImage} alt=""/>
                </div>
                <div className="mt-8 sm:ml-8 sm:mt-0 sm:w-1/2">
                    <h2 className="mb-8 highlight">How does a programmable equity offering work?</h2>
                    <div className="indent">
                        The continous organisation sets a <span className="font-semibold">Minimal Funding Goal (MFG)</span>, a set amount of investment. 
                        DAT tokens, which represent a claim on the DAT-managed cash reserve, i.e. a function of revenues, are issued to reach the MFG.
                    </div>
                    <div className="mt-4">                         
                        Additionally, the continuous organisation determines the terms of the programmable equity offering by setting the percentage of the annual 
                        revenue committed to go into the reserve. The higher the allocated percentage, the less riskier it is for investors.
                    </div>
                    <div className="mt-4">                        
                        Once the terms are set, tokens are issued proportionally to the amount of money invested.
                    </div>
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    What can be done while the MFG is not met?
                </h2>
                <div className="indent">
                    As long as the MFG is not met, investors can receive the token at a fixed average price, and can sell them again to receive their investment back. 
                    During this period, the funds of every investment are escrowed by the DAT.
                </div>
                <div className="mt-4">
                    The programmable equity offering can run indefinitely or have a set minimum period running time, which is defined in the DAT. 
                    The minimum period of time can be increased by the continuous organisation.
                </div>
                <div className="mt-4">
                    The continous organisation can cancel the programmable equity offering while the MFG is not met. In case of cancellation, all investors can withdraw their complete investment. 
                    Once the minimum period of time is reached, the programmable equity offering can be closed by the continuous organisation.
                </div>
            </div>

            <div className="pt-12 px-8 flex justify-between flex-col-reverse sm:flex-row">
                <div className="mt-8 sm:mr-8 sm:mt-0 w-full sm:w-1/2">
                    <h2 className="mb-8 highlight">MFG achieved: What happens now?</h2>
                    <div className="indent">
                        Once the MFG is met, a so-called bonding curve starts with which a portion of the MFG is moved into a reserve 
                        and another portion is transferred to the continuous organisation, the beneficiary of the programmable equity offering.
                    </div>
                    <div className="mt-4">     
                        The bonding curve consists of two functions, one to determine the buy curve and one for the sell curve.
                        Now, investors can no longer withdraw their funds, but sell their tokens at a calculated price.
                    </div>
                    <div className="mt-4">
                        When the programmable equity offering ends, all outstanding tokens are bought back by the continuous organisation through an exit fee transfer to the reserve.
                    </div>
                </div>
                <div className="sm:w-1/2 flex content-center">
                    <ImageWrapper src={pricesCurveImage} alt=""/>
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    New fundraising method - How is a PEQ offering different from an ICO?
                </h2>
                <div className="indent">
                    With blockchain technology many <span className="font-semibold">new funding mechanisms</span> were explored. A colorful parade of acronyms followed - ICOs, IEOs, STOs, SAFTs, ... <br/>
                    <span className="font-semibold">Initial Coin Offerings</span> (ICOs) became a very popular method for blockchain projects to raise high amounts of capital. This led to a boom of such offerings. With the boom came disillusionment and disenchantment: With an increased number of ICOs came the realisation that many ICO tokens did not represent much worth. Thus, leading to no value in open markets, i.e. secondary markets.
                </div>
                <div className="mt-4">
                    ICOs were not without <span className="font-semibold">benefits</span>: This egalitarian and accessible offering frees companies from courting venture capitalists and the constraining process with strong regulatory requirements and high costs of an IPO. <br/>
                    Investors, that are not venture capitalists or institutional investors, gain greater access to attractive opportunities at early stages. <br/>
                    Companies gain access to new liquidity and can maintain better control over their company’s ownership.
                </div>
                <div className="mt-4">
                    In an effort to keep the beneficial characteristics of ICOs but tackle the downsides, debates on possible programmable equity offerings continued.
                </div>
                <div className="mt-4">
                    Programmable equity offering tokens have similarities to ICOs: <br/>
                </div>
                <div>
                    <ul>
                    <li><span className="font-semibold">Accessibility:</span> Similar to ICOs, the offering is accessible to everyone.</li>
                    <li><span className="font-semibold">Automation and self-management:</span> Token issuance and management relies on a smart contract, making it a mostly-automated process.</li>
                    <li><span className="font-semibold">New markets:</span> Token offerings open up new markets and with it new funding opportunities.</li>
                    <li><span className="font-semibold">Low cost:</span> Compared to traditional financing mechanisms, the cost of running a blockchain-based offering and issuing tokens is estimated to be much lower than for example the cost of conducting an IPO.</li>
                    </ul>
                </div>
                <div className="mt-4">
                    A revenue-focused approach based on a company’s future shares aligns stakeholder interests, allows for greater investor accessibility and protects investors more due to the algorithmically tie between the token and company’s 
                    revenues and the reserve-backing, while also maintaining founders’ ownership and opening up new liquidity. In addition, PEQ offerings have a stronger regulatory stance as they are no equity investment.
                </div>  
                <div className="mt-4">                  
                    <span className="font-semibold">The biggest benefit of PEQ offerings is the value proposition of tokens: As tokens represent a claim on the reserve, and indirectly future revenue, the token has an intrinsic value tied to the reserve.</span>
                </div>
            </div>

        </div>
    );
}
