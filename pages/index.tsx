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
                    A Rolling SAFE on Tezos
                </p>
            </div>

            <div className="pt-8 px-8">
                <p className="indent">
                    <span className="font-semibold italic">This platform is an example project and part of the educational course on <a className="font-family-body" href="http://tezos.b9lab.com" target="_blank" rel="noreferrer">B9lab&apos;s Tezos Developer Platform</a>. 
                    There is <span className="text-highlight">no real investment or company</span> involved. Instead, all transactions displayed are performed on a testnet, 
                    <span className="font-bold"> the Hangzhou Testnet</span>.</span>
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8"><span className="highlight">What is TZMINT?</span></h2>
                <p className="indent">
                    TZMINT is a sample application demonstrating a Rolling Simple Agreement for Future Equity (Rolling SAFE), a new programmable equity funding method on Tezos. The tokens investors can buy and sell on this sample application are called <span className="font-bold">TZM</span>.
                </p>
                <p className="mt-4">
                    The programmable equity offering is issued as a <span className="font-semibold">Rolling SAFE</span>. Rolling SAFEs can be understood as an upgrade to a classic SAFE.<br/>
                    Companies set a minimum funding goal and deploy a smart contract, which issues tokens, handles funds as well as transactions, and manages the reserve, which hold a certain percentage of the funding to buy back the issued tokens once the offering is terminated.<br/>
                    Investors can buy and sell tokens at any point in time - as long as the offering is active. The price of the token is automated, initially set at a constant level and later adjusted by a buy-sell slope based on the 
                    number of tokens issued. The token is backed by the amount allocated to the reserve and the expected future revenues of the issuing company.
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8"><span className="highlight">About the project</span></h2>
                <p className="indent">
                    The purpose of this project is to showcase an implementation of a full platform that interacts with the Tezos blockchain. TZMINT is an educational project for developers who want to <span className="font-bold">learn how to develop Tezos applications</span> leveraging the ecosystem stack. This platform is an example implementation.
                </p>
                <p className="mt-4">
                    You can test the web application without having to know much about the inner workings of Tezos. You can find an introduction to Tezos and developing with the Tezos stack in the <a className="font-family-body" href="http://tezos.b9lab.com" target="_blank" rel="noreferrer">B9lab&apos;s Tezos Developer Platform</a>.
                </p>
                <p className="mt-4">
                    Due to the educational aim of this platform, some steps that go beyond the scope of a blockchain and would add complexity have been omitted 
                    (e.g. a full KYC process and CDD checks), while some features have been added to specifically demonstrate their implementation.
                </p>
            </div>

            <div className="w-full flex flex-wrap justify-between pt-12 px-8">
                <CtaCard href="https://tezos.b9lab.com/rolling-safe-project" text="Discover B9lab&apos;s Tezos Developer Platform. &#8594;" title="Want to dive into developing a Rolling SAFE with Tezos?" classes="sm:pr-2"/>
            </div>
            
            <div className="w-full flex flex-wrap justify-between py-12 px-8">
                <CtaCard href="/general-investment-info" text="Next page &#8594;" title="Want to have an investment overview of the Rolling SAFE?" classes="sm:pr-2"/>
            </div>

        </div>
    );
}
