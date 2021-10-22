import CtaCard from "../src/components/CtaCard";

export default function InvestmentWhitePaper() {
    return (
        <div className="pb-8">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Continuous Organizations White Paper</h1>
                <p className="body-text-large italic">
                </p>
            </div>
            <div className="pt-8 px-8">
                <p className="indent">
                    You can find the Continuous Organizations White Paper in the <a className="font-family-body font-semibold" href="https://github.com/C-ORG/whitepaper" target="_blank" rel="noreferrer">C-ORG Github Repository</a>
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">Further Resources</h2>
                <div className="mt-4">
                    <ul class="list-disc list-inside">
                        <li>Continuous Organizations <a className="font-family-body font-semibold" href="https://github.com/C-ORG/whitepaper#annex" target="_blank" rel="noreferrer">calculation details (annex)</a></li>
                        <li>Fairmint&apos;s <a className="font-family-body font-semibold" href="https://fairmint.co/cafe-continuous-agreement-for-future-equity" target="_blank" rel="noreferrer">Continous Agreement for Future Equity</a> implementation</li>
                    </ul>
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-between">
                <CtaCard href="/https://tezos.b9lab.com/cso-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Ready to dive into the specifics of developing a CAFE with Tezos?" classes="sm:pr-2"/>
                <CtaCard href="/get-started" text="Next page &#8594;" title="Ready to get started?" classes="sm:pl-2"/>
            </div>

        </div>
    );
}
