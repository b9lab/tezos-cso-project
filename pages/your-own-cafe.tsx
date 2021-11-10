import CtaCard from "../src/components/CtaCard";

export default function YourOwnCAFE() {
    return (
        <div className="pb-8">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Your Rolling SAFE</h1>
                <p className="body-text-large italic">
                    Reasons to issue a Rolling SAFE
                </p>
            </div>

           <div className="pt-8 px-8">
                <p className="indent">
                    There are several reasons why an organization would opt to issue a Rolling SAFE. 
                    To better understand them, let&apos;s get to know our project&apos;s example issuer.
                </p>
                <p className="mt-4">
                    TZMINT Inc. is a company currently valued at USD 1,000,000. It has conducted previous financing rounds with some venture capitalists that received company shares in return to their investment. 
                    Now, the start-up wants to increase its financial means to continue developing its innovative service but has certain limits and preferences when it comes to funding.
                </p>
                <p className="mt-4">
                    What expectations does the financial mechanism have to fulfill? 
                    TZMINT Inc. wants to:
                </p>
                <div>
                    <ul className="list-disc list-inside">
                    <li>Maintain decision-making and ownership control, i.e. does not want to link governing rights to the funding,</li>
                    <li>Get the funding as soon as possible because development will come to a halt soon without further funds,</li>
                    <li>Automate as much as possible the funding process,</li>
                    <li>Chose an offering that is accessible to as many investors as possible to make the offering available to their community and a variety of stakeholders,</li>
                    <li>Keep costs low, and</li>
                    <li>Protect the company and investors while offering a credible and beneficial investment opportunity.</li>
                    </ul>
                </div>

                <p className="mt-4">
                    TZMINT Inc. opts for a Rolling SAFE offering as it provides a financial mechanism that does not curtail decision-making and ownership, has increased access for investors and would free up new liquidity opportunities. 
                    As a Rolling SAFE is automated and has much lower costs than an IPO, for example, but also gives access to funding very quickly, TZMINT Inc. opts to issue a Rolling SAFE.
                </p>
                <p className="mt-4">
                    To issue a Rolling SAFE, some questions have to be answered first:
                </p>
                <div>
                    <ul className="list-disc list-inside">
                    <li>What is the company&#39;s ticker symbol (for example, $TZM for TZMINT Inc.)?</li>
                    <li>What is the initial valuation and allocation of equity? How much of it should be reserved as stakeholder allocation for existing shareholders?</li>
                    <li>How long should the Rolling SAFE run?</li>
                    <li>How high should the minimum funding goal (MFG) be?</li>
                    <li>What is the base currency and the minimum investment?</li>
                    <li>How much should be allocated initially to the reserve? How much should be allocated to the reserve in general, i.e. how much funds should be held in the contract’s reserve, and how much of the future revenues should be allocated to the reserve?</li>
                    </ul>
                </div>
                <p className="mt-4">
                    The runtime of the Rolling SAFE can be increased any time, as long as the offering has not been terminated. Thus, TZMINT Inc. has some flexibility of when they want to terminate and must pay the exit fee to token holders.    
                 </p>
                 <p className="mt-4">
                    The MFG can be as high as the organization wishes. TZMINT Inc. opts for an MFG of 1,000 tez – the company is sure that should suffice for the funding of their newest project to continue developing their service. 
                 </p>
                 <p className="mt-4">
                    The base currency, against which the exchange rate is quoted, should be stable to avoid large price fluctuations impacting the value of the offering. For this reason, they opt for tez. Using a stablecoin, a cryptocurrency pegging its value to an established currency like USD or Euro, would also have been an option. 
                </p>
                <p className="mt-4">
                    When it comes to the equity allocation and the reserve, TZMINT Inc. can decide how much risk and return-of-investment (ROI) they want to base their offering on. TZMINT Inc. opts to allocate 40% of their equity to the Rolling SAFE, while 5% are allocated to compensate the existing shareholders in case the value they accrue is negatively impacted by the offering - This 5% equity allocation is reserved to reduce the incentive of existing shareholders to use their decision-making rights to negatively impact the offering. 
                </p>
                <p className="mt-4">
                    The percentage of funds and revenues allocated to the reserve is set at 80% to reduce the pressure of having large enough cash flows to cover the buy of tokens from investors during the offering and the buyback at termination. This percentage can of course also be lower, but it would increases the risk of running out of means to finance the offering’s running and closing. The higher the percentage is the less-risk investors will associate with it, making it more attractive for risk-averse investors.
                </p>
            </div>

            <div className="w-full flex flex-wrap justify-between py-8 px-8">
                <CtaCard href="/https://tezos.b9lab.com/cso-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Ready to develop a Rolling SAFE?" classes="sm:pr-2"/>
                <CtaCard href="/investment-white-paper" text="Next page &#8594;" title="Ready to continue?" classes="sm:pl-2"/>
            </div>

        </div>
    );
}
