import { SITE_NAME } from '../src/constants';

export default function Home() {
    return (
        <div className="mb-20 home">
          <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">{SITE_NAME}</h1>
                <div className="body-text-large italic">
                    Illustration of a programmable equity implementation on Tezos
                </div>
            </div>

            <div className="pt-8 px-8">
                <div className="indent">
                    This platform is an example project, which is part of the educational course on the 
                    <a className="font-family-body font-semibold text-accent-1" href="http://tezos.b9lab.com" target="_blank" rel="noreferrer"> Tezos Developer Platform</a>. 
                    There is <span className="font-semibold">no real investment or company</span> involved. Instead, all transactions displayed are performed on a testnet, 
                    <span className="font-semibold"> the Florence testnet</span>.
                </div>
                <div className="mt-4">
                    The purpose of this project is to showcase an implementation of a full platform which interacts with the Tezos blockchain. 
                    Additionally, it illustrates how challenges, which arise when moving from a simple local proof-of-concept implementation to a public online platform, can be addressed.
                </div>
                <div className="mt-4">
                    Due to the educational aim of this platform, some steps that go beyond the scope of a blockchain and would add complexity have been omitted 
                    (e.g. a full KYC process and CDD checks), while some features have been added to specifically demonstrate their implementation.
                </div>
                {/*
                <div className="mt-4">
                    You can read more about the architecture, implementation, and feature details <a className="font-family-body font-semibold text-accent-1" href="https://www.google.com/" target="_blank" rel="noreferrer">here</a>, 
                    or check out the full source code on <a className="font-family-body font-semibold text-accent-1" href="https://www.google.com/" target="_blank" rel="noreferrer">GitHub</a>.
                </div>
                */} 
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    What is TZMINT?
                </h2>
                <div className="indent">
                    TZMINT is a sample application demonstrating a continuous agreement for future equity for programmable equity (PEQ) funding on Tezos. The token investors can buy and sell on this sample application is called <span className="font-semibold">TZM</span>.
                </div>
                <div className="mt-4">
                    The programmable equity offering is issued as a <span className="font-semibold">continuous agreement for future equity</span>, i.e. a continuous token offering of a programmable equity. <br/>
                    Companies set a minimal funding goal, deploy a smart contract that issues the tokens and handles funds, buy and sell transactions, and manages the reserve holding a certain percentage of the funding for buybacks. <br/>
                    Investors can buy and sell tokens at any point in time - as long as the offering is active. The price of the token is automated, initially set at a constant level and later adjusted by a buy and sell slope based on the 
                    number of tokens issued (i.e. acquired). The token is backed by the amount initially allocated to the reserve and the company’s future revenue.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    Steps in a continuous agreement for future equity
                </h2>
                <div>
                    <ol>
                        <li>During <span className="font-semibold">initialisation</span> a company deploys a smart contract, sets a minimal funding goal, values the company, and creates the reserve with a set percentage of revenue being allocated to it.</li>
                        <li>While the <span className="font-semibold">offering runs</span>, tokens are issued/minted proportionally to the amount held in the reserve. Token holders (the investors) can buy and sell their tokens for market prices, as well as sell them directly to the reserve, i.e. redeem them.</li>
                        <li>When the <span className="font-semibold">offering ends</span>, all tokens in circulation are bought back by the company, similar to a traditional buyback.</li>
                    </ol>
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    New fundraising method - How is a PEQ offering different from an ICO?
                </h2>
                <div className="indent">
                    With blockchain technology many <span className="font-semibold">new funding mechanisms</span> were explored. A colorful parade of acronyms followed - ICOs, IEOs, STOs, SAFTs, ... <br/>
                    <span className="font-semibold">Initial coin offerings</span> (ICOs) became a very popular method for blockchain projects to raise high amounts of capital. This led to a boom of such offerings. With the boom came disillusionment and disenchantment: With an increased number of ICOs came the realisation that many ICO tokens did not represent much worth. Thus, leading to no value in open markets, i.e. secondary markets.
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
                    <li><span className="font-semibold">New markets:</span>: Token offerings open up new markets and with it new funding opportunities.</li>
                    <li><span className="font-semibold">Low cost:</span>: Compared to traditional financing mechanisms, the cost of running a blockchain-based offering and issuing tokens is estimated to be much lower than for example the cost of conducting an IPO.</li>
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
