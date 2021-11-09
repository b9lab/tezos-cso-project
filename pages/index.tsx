import { SITE_NAME } from '../src/constants';
import ImageWrapper from "../src/components/ImageWrapper";
import CtaCard from "../src/components/CtaCard";
import organigramImage from '../public/organigram.png';
import pricesCurveImage from '../public/buy-sell-function.png';

/**
 * Home page
 */
export default function Home() {
    return (
        <div className="pb-8 home">
            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">{SITE_NAME}</h1>
                <p className="body-text-large italic">
                    Illustration of a programmable equity implementation on Tezos
                </p>
            </div>

            <div className="pt-8 px-8">
                <p className="indent">
                    This platform is an example project, which is part of the educational course on the <a className="font-family-body" href="http://tezos.b9lab.com" target="_blank" rel="noreferrer">Tezos Developer Platform</a>. 
                    There is <span className="text-highlight">no real investment or company</span> involved. Instead, all transactions displayed are performed on a testnet, 
                    <span className="font-bold"> the Granada testnet</span>.
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    Why programmable equity on Tezos?
                </h2>
                <p className="indent">
                    The purpose of this project is to showcase implementation of a full platform that interacts with the Tezos blockchain. TZMINT is an educational project for developers who want to <span className="font-bold">learn how to develop Tezos applications</span> leveraging the ecosystem stack. This platform is an example implementation; you can find more information on how the project was developed and implemented on the <a className="font-family-body" href="http://tezos.b9lab.com/cso-project" target="_blank" rel="noreferrer"> Tezos Developer Platform</a>.
                </p>
                <p className="mt-4">
                    You can test the example application without having to know much about the inner workings of Tezos. For an introduction to Tezos and developing with the Tezos stack, please see <a className="font-family-body" href="http://tezos.b9lab.com" target="_blank" rel="noreferrer">B9lab&apos;s Tezos Developer Platform</a>. This illustration of a programmable equity implementation on Tezos gives blockchain developers an example of such an application on Tezos.
                </p>
                <p className="mt-4">
                    Due to the educational aim of this platform, some steps that go beyond the scope of a blockchain and would add complexity have been omitted 
                    (e.g. a full KYC process and CDD checks), while some features have been added to specifically demonstrate their implementation.
                </p>

                <div className="w-full flex flex-wrap justify-between">
                    <CtaCard href="https://tezos.b9lab.com/cso-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Dive into the specifics of developing a programmable equity implementation on Tezos" classes="sm:pr-2"/>
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    What is TZMINT?
                </h2>
                <p className="indent">
                    TZMINT is a sample application demonstrating a Rolling Simple Agreement for Future Equity (Rolling SAFE) a new programmable equity funding method on Tezos. The tokens investors can buy and sell on this sample application are called <span className="font-bold">TZM</span>.
                </p>
                <p className="mt-4">
                    The Rolling SAFE offering is issued as a <span className="font-semibold">Rolling Simple Agreement for Future Equity</span>, i.e. a rolling/continous agreement for future equity, an upgrade on the classic SAFE. <br/>
                    Companies set a minimum funding goal and deploy a smart contract, which issues the tokens, handles funds as well as transactions, and manages the reserve holding a certain percentage of the funding to buy back the issued tokens once the offering is terminated. <br/>
                    Investors can buy and sell tokens at any point in time - as long as the offering is active. The price of the token is automated, initially set at a constant level and later adjusted by a buy-sell slope based on the 
                    number of tokens issued. The token is backed by the amount initially allocated to the reserve and the company’s future revenue.
                </p>
                <p className="mt-4">
                    To better understand the new financing instrument and its mechanisms implemented in this project, let&apos;s first explore what a Rolling SAFE offering is.
                </p>
            </div>

            <div className="w-full flex flex-wrap justify-between pt-12 px-8">
                <CtaCard href="/cafe-info" text="A Rolling Simple Agreement for Future Equity (Rolling SAFE). &#8594;" title="Already know all about Rolling SAFE offerings? Jump ahead to look at a specific implementation of a PEQ offering:" classes="sm:pr-2"/>
            </div>
            
            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    What is a Rolling SAFE offering?
                </h2>
                <p className="indent">
                    In a Rolling SAFE offering, security tokens are issued, which can for example represent a proportional share of a company&apos;s future revenue. 
                    Thus, it would not be equity-centered but revenue-focused and bear the potential of aligning stakeholder interests with the financial success of a company.
                </p>
                <p className="mt-4">
                    Whereby, the company setting up the Rolling SAFE is often called the <span className="font-semibold">issuer</span> 
                    as the security tokens are offered continuously and not just during one instance. It funnels a part of its revenue, a fixed percentage, 
                    into a <span className="font-semibold">Decentralized Autonomous Trust (DAT)</span> during a pre-defined time period. 
                    A DAT is a <span className="font-semibold">smart contract</span> that automatically issues the tokenised security, and handles sales and buybacks.
                </p>
            </div>

            <div className="pt-12 px-8 ">
                <h2 className="mb-8 highlight">How does a Rolling SAFE offering work?</h2>
                <p className="indent">
                    The continous organization sets a <span className="font-semibold">Minimum Funding Goal (MFG)</span>, a set amount of investment. 
                    DAT tokens, which represent a claim on the DAT-managed cash reserve, i.e. a function of revenues, are issued to reach the MFG.
                </p>
            </div>

            <div className="pt-12 px-8 flex justify-between flex-col sm:flex-row">
                <div className="sm:w-1/2 flex content-center">
                    <ImageWrapper src={organigramImage} alt=""/>
                </div>
                <div className="mt-8 sm:ml-8 sm:mt-0 sm:w-1/2">
                    <p className="mt-4">
                        The MFG increases protection for investors and the issuing organization: It assures investors that as long as the MFG is not met, for example, if it does not attract many investors, they can withdraw their investment and get 100% of it back. 
                        Moreover, early investors get a fixed price for tokens, which creates a threshold under which the price for a token will not fall. The MFG also protects the issuing organization by providing great flexibility; as long as the MFG is not met, the organization can cancel the offering.
                    </p>
                </div>
            </div>

            <div className="pt-12 px-8 ">
                <p className="mt-4">                         
                    Additionally, the issuer determines the terms of the Rolling SAFE offering by setting the percentage of the annual 
                    revenue committed to the reserve. The higher the allocated percentage the less risky it is for investors, as the reserve ensures that the company issuing the offering has the financial means to buy back tokens from investors while the offering is active and when the time for termination comes.
                </p>
                <p className="mt-4">                        
                    Once the terms are set, tokens are issued proportionally to the amount of money invested.
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    What can be done while the MFG is not met?
                </h2>
                <p className="indent">
                    As long as the MFG is not met, investors can receive the token at a fixed price and can sell them again to receive their investment back. 
                    During this period, the funds of every investment are escrowed by the DAT.
                </p>
                <p className="mt-4">
                    The Rolling SAFE offering can run indefinitely or have a set minimum running time, which is defined in the DAT. 
                    The running time can be increased by the issuer.
                </p>
                <p className="mt-4">
                    The issuer can cancel the Rolling SAFE offering while the MFG is not met. In case of cancellation, all investors can withdraw their complete investment. 
                    Once the minimum period of time is reached, the Rolling SAFE offering can be closed by the issuer.
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">MFG achieved: What happens now?</h2>
                    <p className="indent">
                        Once the MFG is met, a so-called bonding curve starts with which a portion of the MFG is moved into a reserve 
                        and another portion is transferred to the issuer, the beneficiary of the Rolling SAFE offering.
                    </p>
                    <p className="mt-4">
                        Why do we need a reserve? The reserve can be understood as the counterparty of an investor transaction to buy or sell the offering&apos;s tokens. It has to hold enough to buy tokens back anytime, especially when the offering is terminated and all tokens are bought back from the investors. For this reason, the tokens do not represent a claim on the organization&apos;s ownership, but instead is a representation of a financial claim against the reserve and the organization&apos;s future revenues. 
                    </p>
            </div>
            <div className="pt-12 px-8 flex justify-between flex-col-reverse sm:flex-row">
                <div className="mt-8 sm:mr-8 sm:mt-0 w-full sm:w-1/2">
                    <p className="mt-4">     
                        The bonding curve consists of two functions, one to determine the buy curve and one for the sell curve. The bonding curve acts as an automated market maker to allow for an instant buy and sell of tokens.
                    </p>
                    <p className="mt-4">
                        Now, investors can no longer withdraw their funds, but instead, sell their tokens at a calculated price. While the MFG is not met, all funds are escrowed. Thus, investors can withdraw their investment and receive all of it back. As soon as the bonding curve begins, investors can only sell their tokens for the current price.
                    </p>
                </div>
                <div className="sm:w-1/2 flex content-center">
                    <ImageWrapper src={pricesCurveImage} alt=""/>
                </div>
            </div>

            <div className="pt-12 px-8">
                
                
                
                <p className="mt-4">
                    Once the MFG is met, the offering can no longer be cancelled and remains active as defined by the minimum running time of the offering.
                </p>
                <p className="mt-4">
                    When the Rolling SAFE offering ends, all outstanding tokens are bought back by the issuer through an exit fee transfer to the reserve.
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    New fundraising method - How is a PEQ offering different from an ICO?
                </h2>
                <p className="indent">
                    With blockchain technology, many <span className="font-semibold">new financing mechanisms</span> were explored. A colorful parade of acronyms followed - ICOs, IEOs, STOs, SAFTs, ... <br/>
                    <span className="font-semibold">Initial Coin Offerings</span> (ICOs) became a very popular method for blockchain projects to raise high amounts of capital. This led to a boom of such offerings. With the boom came disillusionment and disenchantment: With an increased number of ICOs came the realisation that many ICO tokens did not represent much worth. Thus, leading to no value in open markets, i.e. secondary markets.
                </p>
                <p className="mt-4">
                    ICOs were not without <span className="font-semibold">benefits</span>: This egalitarian and accessible offering frees companies from courting venture capitalists and the constraining process with strong regulatory requirements and high costs of an IPO. <br/>
                    Investors, that are not venture capitalists or institutional investors, gain greater access to attractive opportunities at early stages. <br/>
                    Companies gain access to new liquidity and can maintain better control over their company’s ownership.
                </p>
                <p className="mt-4">
                    In an effort to keep the beneficial characteristics of ICOs but tackle the downsides, debates on possible programmable equity offerings continued.
                </p>
                <p className="mt-4">
                    Programmable equity offering tokens have similarities to ICOs: <br/>
                </p>
                <div>
                    <ul className="list-disc list-inside">
                    <li><span className="font-semibold">Accessibility:</span> Similar to ICOs, the offering is accessible to everyone.</li>
                    <li><span className="font-semibold">Automation and self-management:</span> Token issuance and management rely on a smart contract, making it a mostly-automated process.</li>
                    <li><span className="font-semibold">New markets:</span> Token offerings open up new markets and with it new funding opportunities.</li>
                    <li><span className="font-semibold">Low cost:</span> Compared to traditional financing mechanisms, the cost of running a blockchain-based offering and issuing tokens is estimated to be much lower than for example the cost of conducting an IPO.</li>
                    </ul>
                </div>
                <p className="mt-4">
                    A revenue-focused approach based on a company’s future shares aligns stakeholder interests, allows for greater investor accessibility and protects investors more because of the algorithmic ties between the token and company’s 
                    revenues and the reserve-backing, while also maintaining founders’ ownership and opening up new liquidity. In addition, PEQ offerings have a stronger regulatory stance as they are no equity investments.
                </p>
                <p className="mt-4">                  
                    <span className="font-semibold">The biggest benefit of PEQ offerings is the value proposition of tokens: As tokens represent a claim on the reserve, and indirectly future revenue, the token has an intrinsic value tied to the reserve.</span>
                </p>
            </div>

            <div className="w-full flex flex-wrap justify-between py-12 px-8">
                <CtaCard href="/cafe-info" text="Next page &#8594;" title="Ready to dive right in?" classes="sm:pr-2"/>
            </div>

        </div>
    );
}
