import Image from 'next/image';
import pricesCurveImage from '../public/prices-curve.png';
import flowImage from '../public/cso-flow.png';

export default function About() {
    return (
        <div className="mb-20">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">About This Project</h1>
                <div className="body-text-large italic">
                    Implementing a programmable equity offering on the Tezos blockchain as a Continuous Agreement for Future Equity (CAFE).
                </div>
            </div>

            <div className="pt-8 px-8">
                <div>
                    This platform is an example project, which is part of the educational course on the 
                    <a className="font-family-body font-semibold text-accent-1" href="http://tezos.b9lab.com" target="_blank" rel="noreferrer"> Tezos Developer Platform</a>. 
                    There is <span className="font-semibold">no real investment or company</span> involved. Instead, all transactions displayed are performed on a testnet, 
                    <span className="font-semibold"> the Florence testnet</span>. <br/>
                    The purpose of this project is to showcase an implementation of a full platform which interacts with the Tezos blockchain. 
                    Additionally, it illustrates how challenges, which arise when moving from a simple local proof-of-concept implementation to a public online platform, can be addressed. <br/>
                    Due to the educational aim of this platform, some steps that go beyond the scope of a blockchain and would add complexity have been omitted 
                    (e.g. a full KYC process and CDD checks), while some features have been added to specifically demonstrate their implementation.
                </div>
                <div className="mt-4">
                    You can read more about the architecture, implementation, and feature details <a className="font-family-body font-semibold text-accent-1" href="#" target="_blank">here</a>, 
                    or check out the full source code on <a className="font-family-body font-semibold text-accent-1" href="#" target="_blank">GitHub</a>.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8">
                    Getting started
                </h2>
                <div className="indent">
                    To interact with the platform, you first need to <span className="font-semibold">sign in and connect your wallet</span>. 
                    Afterwards, you will be able to buy and sell tokens through the platform using tez on the Florence testnet.<br/>
                    To have tez, just go to the following <a className="font-family-body font-semibold text-accent-1" href="#" target="_blank" rel="noreferrer">faucet</a>.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8">
                    What is a programmable equity offering?
                </h2>
                <div className="indent">
                    In a programmable equity offering, security tokens are issued, which represent a proportional share of a company&apos;s future revenue. 
                    Thus, it is not equity-centered but revenue-focused, and brings the potential of aligning stakeholder interests with the financial success of a company.
                </div>
                <div className="mt-4">
                    Whereby, the company setting up the programmable equity is often called a <span className="font-semibold">continuous organisation</span> 
                    as the security tokens are offered continuously and not just during one instance. It funnels a part of its revenue, a fixed percentage, 
                    into a <span className="font-semibold">decentralized autonomous trust (DAT)</span> during a pre-defined time period. 
                    A DAT is a <span className="font-semibold">smart contract</span> that automatically issues the tokenised security, and handles sales and buy backs.
                </div>
            </div>

            <div className="pt-12 px-8 flex justify-between flex-col-reverse sm:flex-row">
                <div className="mt-8 sm:mr-8 sm:mt-0 w-full">
                    <h2 className="mb-8 highlight">How does a programmable equity offering work?</h2>
                    <div>
                        The continous organisation sets a <span className="font-semibold">minimal funding goal (MFG)</span>, a set amount of investment. 
                        With the DAT FAIR Securities, a representation of a claim on the DAT-managed cash reserve that is a function of revenues, are issued to reach the MFG.<br/>
                        Additionally, the continuous organisation determines the terms of the programmable equity offering by setting the percentage of the annual 
                        revenue committed to go into the reserve. The higher the allocated percentage, the less riskier it is for investors.<br/>
                        Once the terms are set, tokens are issued proportionally to the amount of money invested.
                    </div>
                </div>
                <Image src={flowImage} objectFit="contain" alt=""/>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8">
                    What can be done while the MFG is not met?
                </h2>
                <div className="indent">
                    As long as the MFG is not met, investors can receive the tokenised FAIR security at a fixed average price, and can sell them again to receive their investment back. 
                    During this period, the funds of every investment are escrowed by the DAT. <br/>
                    The programmable equity offering can run indefinitely or have a set minimum period running time, which is defined in the DAT. 
                    The minimum period of time can be increased by the continuous organisation. <br/>
                    The continous organisation can cancel the programmable equity offering while the MFG is not met. In case of cancelation, all investors can withdraw their complete investment. 
                    Once the minimum period of time is reached, the programmable equity offering can be closed by the continuous organisation.
                </div>
            </div>

            <div className="pt-12 px-8 flex justify-between flex-col-reverse sm:flex-row">
                <div className="mt-8 sm:mr-8 sm:mt-0 w-full">
                    <h2 className="mb-8 highlight">MFG achieved: What happens now?</h2>
                    <div>
                        Once the MFG is met, a so-called bonding curve starts with which a portion of the MFG is moved into a reserve 
                        and another portion is transferred to the continuous organisation, the beneficiary of the programmable equity offering. <br/>
                        The bonding curve consists of two functions, one to determine the buy curve and one for the sell curve.
                        Now, investors can no longer withdraw their funds, but sell their tokens at a calculated price.
                    </div>
                    <div className="mt-4">
                        When the programmable equity offering ends, all outstanding tokens are bought back by the continuous organisation through an exit fee transfer to the reserve.
                    </div>
                </div>
                <Image src={pricesCurveImage} objectFit="contain" alt=""/>
            </div>

        </div>
    );
}
