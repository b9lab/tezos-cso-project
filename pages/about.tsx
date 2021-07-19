import Image from 'next/image';
import pricesCurveImage from '../public/prices-curve.png';
import flowImage from '../public/cso-flow.png';

export default function About() {
    return (
        <div className="mb-20">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">About this Project</h1>
                <div className="body-text-large italic">
                    Implementing a Continuous Securities Offering (CSO) on the Tezos blockchain protocol 
                    as a Continuous Agreement for Future Equity (CAFE).
                </div>
            </div>

            <div className="pt-20 px-8">
                <h2 className="mb-8">
                    The digital economy - Changing economic relationships, instruments, and markets
                </h2>
                <div className="indent">
                    The era of decentralised finance (DeFi) - finance based on blockchain technology - 
                    brings many different mechanisms and instruments to financial markets. 
                    DeFi introduces new decentralised financial instruments, which do not rely on traditional, 
                    central intermediaries like banks. These new financial instruments are based on smart 
                    contracts on blockchain protocols ensuring correct functioning and automatisation. <br/><br/>

                    After initial coin offerings (ICOs) - an equivalent to initial public offerings (IPOs) 
                    by issuing a cryptocurrency token - were introduced in 2017/18, they skyrocketed in the first ICO bubble. 
                    Being a high-risk investment, soon Initial Exchange Offerings (IEOs) - similar to an ICO but conducted 
                    on a cryptocurrency exchange - and Security Token Offerings (STOs) - tokenisation of digital securities - 
                    began appearing. All these innovative funding mechanisms were created to offer startups funding opportunities, 
                    while also providing investors with new markets and investment opportunities. <br/><br/>
                        
                    Another new, blockchain-based funding mechanism aimed at increasing the return on investment (ROI) 
                    and reducing the risks for investors are Continuous Securities Offerings (CSOs).
                </div>
            </div>

            <div className="pt-20 px-8">
                <h2 className="mb-8">
                    What is a Continuous Securities Offering?
                </h2>
                <div className="indent">
                    In a CSO, security tokens are issued, which represent a proportional share of a company&apos;s future revenue. 
                    Thus, it is not equity-centered but revenue-focused, and brings the potential of aligning stakeholder 
                    interests with the financial success of a company. <br/><br/>

                    Whereby, the company setting up the CSO is often called a Continuous Organisation. It funnels a part of its revenue, 
                    a fixed percentage, into a Decentralized Autonomous Trust (DAT) during a pre-defined time period. 
                    A DAT is a smart contract that automatically issues the tokenised security, and handles sales and buy backs.
                </div>
            </div>

            <div className="pt-20 sm:pb-8 px-8 flex justify-between flex-col sm:flex-row">
                <Image src={flowImage} objectFit="contain" alt=""/>
                <div className="mt-8 sm:ml-8 sm:mt-0 w-full">
                    <h2 className="mb-8">How does a CSO work?</h2>
                    <div>
                        The Continous Organisation sets a minimal funding goal (MFG), a set amount of investment. 
                        With the DAT FAIR Securities, a representation of a claim on the DAT-managed cash reserve 
                        that is a function of revenues, are issued to reach the MFG. <br/><br/>
                    </div>
                </div>
            </div>

            <div className="px-8">
                Additionally, the Continuous Organisation determines the terms of the CSO by setting a percentage of 
                the annual revenue committed to go into the reserve. The higher the allocated percentage, 
                the less riskier it is for investors. <br/><br/>

                Once the terms are set, tokens are issued proportionally to the amount of money invested. <br/><br/>

                As long as the MFG is not met, investors can receive the tokenised FAIR security at a fixed average price, 
                and can sell them again to receive their investment back. During this period, the funds of every 
                investment are escrowed by the DAT. <br/><br/>

                The CSO can be indefinitely running or have a set minimum period running time, which is defined in the DAT. 
                The Continous Organisation can cancel the CSO while the MFG is not met. In case of cancelation, 
                all investors can withdraw their complete investment. <br/><br/>

                The minimum period of time can be increased by the Continuous Organisation. 
                Once the minimum period of time is reached, the CSO can be closed by the Continuous Organisation.
            </div>

            <div className="pt-20 px-8 flex justify-between flex-col sm:flex-row">
                <Image src={pricesCurveImage} objectFit="contain" alt=""/>
                <div className="mt-8 sm:ml-8 sm:mt-0 w-full">
                    Once the MFG is met, a so-called bonding curve starts with which a portion of the MFG is moved into a reserve 
                    and another portion is transferred to the Continuous Organisation, the beneficiary of the CSO. 
                    The bonding curve consists of two functions, one to determine the buy curve and one for the sell curve. <br/><br/>

                    Now, investors can no longer withdraw their funds, but sell their tokens at a calculated price. 
                    When the CSO ends, all outstanding tokens are bought back by the Continuous Organisation through an exit 
                    fee transfer to the reserve.
                </div>
            </div>

            <div className="pt-20 px-8">
                <h2 className="mb-8 text-center">Benefits of a CSO</h2>
                <div>
                    It brings several benefits compared to other financing mechanisms.
                </div>
            </div>

            <div className="pt-12 px-8 flex justify-between flex-col sm:flex-row">
                <div className="sm:w-1/3">
                    <h3 className="mb-8 text-center">Simple & efficient</h3>
                    <div className="indent body-text-small">
                        Founders of the Continuous Organization can benefit from a simple financing mechanism and strong 
                        network effects that have no effect on the Continuous Organization’s governance.
                    </div>
                </div>
                <div className="mt-12 sm:ml-8 sm:mt-0 sm:w-1/3">
                    <h3 className="mb-8 text-center">Assessable risk</h3>
                    <div className="indent body-text-small">
                        There is a clear value of the token and the instrument is accessible for all types of investors. <br/>
                        Investors profit from increasing revenues, while not suffering from disproportionate dilution in financing rounds.
                    </div>
                </div>
                <div className="mt-12 sm:ml-8 sm:mt-0 sm:w-1/3">
                    <h3 className="mb-8 text-center">Clear value</h3>
                    <div className="indent body-text-small">
                        The value of a token is transparent and the price is argoritmically calculated, i.e. there is a deterministic price calculation.<br/>
                        The token price has a tangible value relative to whether the Continuous Organization can increase the reserve pool.
                    </div>
                </div>
            </div>

            <div className="pt-12 px-8 flex justify-between flex-col sm:flex-row">
                <div className="sm:w-1/3">
                    <h3 className="mb-8 text-center">Regulatory clarity</h3>
                    <div className="indent body-text-small">
                        The regulatory framework is much clearer as a CSO token is an investment not connected to equity or governance rights.
                    </div>
                </div>
                <div className="mt-12 sm:ml-8 sm:mt-0 sm:w-1/3">
                    <h3 className="mb-8 text-center">Collateral for digital security</h3>
                    <div className="indent body-text-small">
                        The Continuous Organization’s realised revenues are used as a collateral to back the security, called FAIR Security.
                    </div>
                </div>
                <div className="mt-12 sm:ml-8 sm:mt-0 sm:w-1/3">
                    <h3 className="mb-8 text-center">Access to new markets and investors</h3>
                    <div className="indent body-text-small">
                        The Continuous Organization is able to access a new set of investors and liquidity markets. <br/>
                        The investors get access to new markets and investment opportunities linked to the Continuous Organization’s future revenue.
                    </div>
                </div>
            </div>

            <div className="pt-12 px-8 flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                    <h3 className="mb-8 text-center">Limitless supply</h3>
                    <div className="indent body-text-small">
                        There is no limit to the amount of tokens that can be issued.
                    </div>
                </div>
                <div className="mt-12 sm:ml-8 sm:mt-0 sm:w-1/3">
                    <h3 className="mb-8 text-center">Guaranteed & immediate liquidity</h3>
                    <div className="indent body-text-small">
                        The DAT always holds enough reserve to buy tokens back ensuring immediate liquidity. <br/>
                        Tokens can be bought or sold instantaneously at any time while the DAT acts as an automated market maker.
                    </div>
                </div>
            </div>

            <div className="pt-20 px-8 flex justify-between flex-col sm:flex-row">
                <div className="my-8 sm:mr-8 sm:my-0 w-full">
                    <h2 className="mb-8 highlight">Want to know more about CSOs?</h2>
                    <div>
                        This is a list of helpful resources
                    </div>
                </div>
            </div>

        </div>
    );
}
