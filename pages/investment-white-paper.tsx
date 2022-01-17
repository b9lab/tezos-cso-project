import CtaCard from "../src/components/CtaCard";

export default function InvestmentWhitePaper() {
    return (
        <div className="pb-8">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Further Resources</h1>
                <p className="body-text-large italic">
                Here you can find some resources to dive deeper
                </p>
            </div>
            <div className="pt-8 px-8">
                <p className="indent">
                    Want to take a jump into Rolling SAFEs and blockchain-enabled funding mechanisms?
                </p>
                <div className="mt-4">
                    <ul className="list-disc list-inside">
                        <li>Thibauld Favre (2019): <a className="font-family-body font-semibold" href="https://github.com/C-ORG/whitepaper" target="_blank" rel="noreferrer">Continuous Organizations White Paper</a></li>
                        <li>Thibauld Favre (2019): <a className="font-family-body font-semibold" href="https://github.com/C-ORG/whitepaper#annex" target="_blank" rel="noreferrer">Continuous Organizations White - Calculation Details (Annex)</a></li>
                        <li>Fairmint: <a className="font-family-body font-semibold" href="https://fairmint.co/cafe-continuous-agreement-for-future-equity" target="_blank" rel="noreferrer">Rolling SAFE</a></li>
                    </ul>
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-between py-12 px-8">
                <CtaCard href="https://tezos.b9lab.com/rolling-safe-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Ready to develop a Rolling SAFE?" classes="sm:pr-2"/>
                <CtaCard href="/get-started" text="Next page &#8594;" title="Ready to get started?" classes="sm:pl-2"/>
            </div>

        </div>
    );
}
