import { SITE_NAME } from '../src/constants';

export default function Home() {
    return (
        <div className="mb-20">
          <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">{SITE_NAME}</h1>
            </div>

            <div className="pt-8 px-8">
                <div className="indent">
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
                    You can read more about the architecture, implementation, and feature details <a className="font-family-body font-semibold text-accent-1" href="https://www.google.com/" target="_blank" rel="noreferrer">here</a>, 
                    or check out the full source code on <a className="font-family-body font-semibold text-accent-1" href="https://www.google.com/" target="_blank" rel="noreferrer">GitHub</a>.
                </div>
            </div>
        </div>
    );
}
