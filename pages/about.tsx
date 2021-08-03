import Image from 'next/image';
import pricesCurveImage from '../public/buy-sell-function.png';
import organigramImage from '../public/organigram.png';

export default function About() {
    return (
        <div className="mb-20">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Programmable Equity</h1>
                <div className="body-text-large italic">
                    Implementing a programmable equity (PEQ) offering on the Tezos blockchain as a continuous agreement for future equity.
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
                    into a <span className="font-semibold">decentralized autonomous trust (DAT)</span> during a pre-defined time period. 
                    A DAT is a <span className="font-semibold">smart contract</span> that automatically issues the tokenised security, and handles sales and buy backs.
                </div>
            </div>

            <div className="pt-12 px-8 flex justify-between flex-col sm:flex-row">
                <div className="sm:w-1/2 flex content-center">
                    <Image src={organigramImage} objectFit="contain" alt=""/>
                </div>
                <div className="mt-8 sm:ml-8 sm:mt-0 sm:w-1/2">
                    <h2 className="mb-8 highlight">How does a programmable equity offering work?</h2>
                    <div className="indent">
                        The continous organisation sets a <span className="font-semibold">minimal funding goal (MFG)</span>, a set amount of investment. 
                        With the DAT tokens, representing a claim on the DAT-managed cash reserve that is a function of revenues, are issued to reach the MFG.
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
                    The continous organisation can cancel the programmable equity offering while the MFG is not met. In case of cancelation, all investors can withdraw their complete investment. 
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
                    <Image src={pricesCurveImage} objectFit="contain" alt=""/>
                </div>
            </div>

        </div>
    );
}
