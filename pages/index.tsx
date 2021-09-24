-import { SITE_NAME } from '../src/constants';
import CtaCard from "../src/components/CtaCard";

export default function Home() {
    return (
        <div className="pb-8 home">
          <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">{SITE_NAME}</h1>
                <div className="body-text-large italic">
                    Illustration of a programmable equity implementation on Tezos
                </div>
            </div>

            <div className="pt-8 px-8">
                <div className="indent">
                    This platform is an example project, which is part of the educational course on the 
                    <a className="font-family-body" href="http://tezos.b9lab.com" target="_blank" rel="noreferrer"> Tezos Developer Platform</a>. 
                    There is <span className="text-highlight">no real investment or company</span> involved. Instead, all transactions displayed are performed on a testnet, 
                    <span className="font-bold"> the Florence testnet</span>.
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
                    You can read more about the architecture, implementation, and feature details <a className="font-family-body font-semibold" href="https://www.google.com/" target="_blank" rel="noreferrer">here</a>, 
                    or check out the full source code on <a className="font-family-body font-semibold" href="https://www.google.com/" target="_blank" rel="noreferrer">GitHub</a>.
                </div>
                */}
                <div className="w-full flex flex-wrap justify-between">
                    <CtaCard href="/cafe-info" text="How it works &#8594;" title="Concepts, formulas and code" classes="sm:pr-2"/>
                    <CtaCard href="/get-started" text="Try it Out TZMINT &#8594;" title="Invest now - 3 minutes quickstart" classes="sm:pl-2"/>
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    What is TZMINT?
                </h2>
                <div className="indent">
                    TZMINT is a sample application demonstrating a continuous agreement for future equity for Programmable Equity (PEQ) funding on Tezos. The token investors can buy and sell on this sample application is called <span className="font-semibold">TZM</span>.
                </div>
                <div className="mt-4">
                    The programmable equity offering is issued as a <span className="font-semibold">continuous agreement for future equity</span>, i.e. a continuous token offering of a programmable equity. <br/>
                    Companies set a minimal funding goal, deploy a smart contract that issues the tokens and handles funds, buy and sell transactions, and manages the reserve holding a certain percentage of the funding for buybacks. <br/>
                    Investors can buy and sell tokens at any point in time - as long as the offering is active. The price of the token is automated, initially set at a constant level and later adjusted by a buy and sell slope based on the 
                    number of tokens issued (i.e. acquired). The token is backed by the amount initially allocated to the reserve and the company’s future revenue.
                </div>
            </div>

    HERE: ELABORATE MORE ON THE PROJECT AND GIVE DEVS A USER JOURNEY OVERVIEW (PEQ->CAFE AS A PARTICULAR CASE)

        </div>
    );
}
