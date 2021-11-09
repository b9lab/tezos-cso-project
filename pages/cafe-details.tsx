import useSWR from "swr";
import ImageWrapper from "../src/components/ImageWrapper";
import CtaCard from "../src/components/CtaCard";
import priceImage from "../public/price-change.png";
import DataHandler from "../src/services/DataHandler";
import TezAmount from "../src/components/TezAmount";
import { format_percentage } from "../src/helpers";
import { CAFE_PARAMETERS_API_ENDPOINT } from "../src/constants";

export type CafeDetailsProps = {
    initialData: any
};

/**
 * Rolling SAFE parameters page
 */
export default function CafeDetails(props: CafeDetailsProps) {
    // The following data is fetched at build time and shown as placeholder on the initial render while on client-side it will be fetched again and updated
    const { data, error } = useSWR(CAFE_PARAMETERS_API_ENDPOINT, { initialData: props.initialData });

    if (!data || error) return <>{error}</>

    return (
        <div className="pb-8">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Rolling SAFE Parameters</h1>
                <p className="body-text-large italic">
                    Here you can find an overview of the Rolling SAFE&apos;s parameters and further explanations on how price and reserve works
                </p>
            </div>

            <div className="mt-6 w-full m-auto sm:w-2/3 flex flex-col bg-white shadow-2xl rounded px-4 py-6">
                <table className="table-auto">
                    <tbody>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Base currency</p>
                                <p className="body-text-small">Currency against which the exchange rate is quoted</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.baseCurrency}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Total equity allocation</p>
                                <p className="body-text-small">Total Amount of equity allocated for the Rolling SAFE offering</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{format_percentage(data.totalAllocation)}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Stakeholder equity allocation</p>
                                <p className="body-text-small">
                                    Part of the total equity allocation reserved to compensate stakeholders in case the value stakeholder holding is affected by the proceedings of the Rolling SAFE
                                </p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{format_percentage(data.stakeAllocation)}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Termination events</p>
                                <p className="body-text-small">Events that terminate the Rolling SAFE</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.terminationEvents.toString()}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Minimum investment</p>
                                <p className="body-text-small">The minimum amount required for a new investment</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2"><TezAmount amount={data.minimumInvestment} nostyle={true} hideSign={true}/> </td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Initial reserve</p>
                                <p className="body-text-small">Initially reserved amount</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2"><TezAmount amount={data.initialReserve} nostyle={true} hideSign={true}/></td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Initial valuation</p>
                                <p className="body-text-small">Initial company valuation in USD</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.initialValuation.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Governing rights</p>
                                <p className="body-text-small">Decision-making authority and voting rights of token holders</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.governingRights}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Reserve percentage</p>
                                <p className="body-text-small">Percentage of the funds being held in the contract&apos;s reserve</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.reservePercentage} %</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Retained revenue percentage</p>
                                <p className="body-text-small">Percentage of the revenues funneled to the reserve</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.retainedRevenuePercentage} %</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Minimum funding goal</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2"><TezAmount amount={data.minimumFundingGoal} nostyle={true} hideSign={true}/></td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Buy slope</p>
                                <p className="body-text-small">The slope of the buy function determining the buy price</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.buySlope.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark-gray px-4 py-2">
                                <p className="font-bold">Sell slope</p>
                                <p className="body-text-small">The slope of the sell function determining the sell price</p>
                            </td>
                            <td className="border border-dark-gray px-4 py-2">{data.sellSlope.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">Determining the price for the Rolling SAFE token</h2>
                <p className="indent">
                    Once the offering is launched, qualified investors can engage at any point in time. The <span className="font-semibold">price</span> is automated and non-negotiable.
                </p>
                <div className="w-full mt-8">
                    <ImageWrapper src={priceImage} alt=""/>
                </div>
                <p className="mt-4">                
                    The initial price is based on the valuation of the company. After an initial period (i.e. when the minimum funding goal is met), it is based on a function of the number of issued tokens and the number of tokens bought (i.e. the invested amount). <br/>                   
                    The more tokens are issued, the higher the price is. The earlier you invest, the more tokens you receive; the price per token rises with the increasing token amount.
                </p>
                <p className="mt-4">                
                    Whereby, the <span className="font-semibold">amount of capital</span> is per se unlimited. The equity allocation of the continuous Rolling SAFE offering can be increased but never decreased.
                </p>
                <p className="mt-4">
                    The <span className="font-bold">buy price</span> is determined by the number of tokens, as the buy function implements a linear relationship between the buy price and the number of tokens. 
                    The <span className="font-bold">sell price</span> is influenced by the reserve. To control the sell price, the issuing organization can use the pay and burn functions to influence the reserve and with it control the sell price.
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">A fixed target equity percentage allocation and fixed dilution</h2>
                <p className="indent">
                    Rolling SAFEs have a <span className="font-semibold">fixed target equity percentage allocation</span>, because of the percentage dedicated to the reserve, ensuring fixed dilution. 
                    Unlike when a company issues additional stock shares, the issuance of tokens and their value is fixed by the parameters of the Rolling SAFE&apos;s smart contract and the value investors hold is not reduced by the issuance of additional &quot;shares&quot; (tokens) as long as they hold their tokens up to the termination of the offering.
                    In a Rolling SAFE, investors&apos; risk is reduced as dilution is fixed and pre-determined. The organization can seek further equity without additional share issuance negatively affecting the value current investors hold. There is no dilution from equity financing.
                </p>
                <p className="mt-4">
                    A fixed equity allocation helps founders maintain long-term control, as the claim bound to the token does not grant any governance rights, i.e. the token represents a non-voting share of future equity.
                </p>
                <p className="mt-4"> 
                    Independently of how much equity a company raises in financing rounds, all investor claims remain collectively the same. For individual investors there is a certain degree of dilution as each token issued contributes to dilution, but it is predictable. 
                    This protects stakeholders from unknown and uncalculated equity dilutions.
                </p>
            </div>
            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    What is the reserve?
                </h2>
                <p className="mt-4">
                    Once the MFG is met the bonding curve begins its work. The smart contract issues tokens, which represent a financial right (claim) on the cash reserve. 
                    This reserve is managed by the smart contract and reflects the organization&apos;s revenues. 
                    So to say, the token represents a claim on the revenue of the organization.
                </p>
                <p className="mt-4">
                    When the organization begins to generate revenue, part of the revenue goes into the buyback reserve. 
                    In addition, the revenue begins to drive the price of the token.
                    This mechanism creates a clear incentive for investors to hold tokens until the organization begins generating revenues and the price begins to rise.
                </p>
                <p className="mt-4">
                    The reserve allows for the bonding curve to act as an automated market maker, as tokens can be bought or sold at any point in time because the reserve holds enough funds to buy tokens back.
                </p>
            </div>
        
            <div className="w-full flex flex-wrap justify-between py-12 px-8">
                <CtaCard href="/https://tezos.b9lab.com/cso-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Ready to dive into the specifics of developing a Rolling SAFE with Tezos?" classes="sm:pr-2"/>
                <CtaCard href="/your-own-cafe" text="Next page &#8594;" title="Ready to continue?" classes="sm:pl-2"/>
            </div>

        </div>
    );
}

export async function getStaticProps() {
    const dataHandler = new DataHandler();
    const initialData = await dataHandler.getCafeParameters().catch(console.error);
    return { props: { initialData } };
}
