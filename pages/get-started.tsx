import React from "react";
import CtaCard from "../src/components/CtaCard";

import temple1Image from "../public/temple-1.png";
import temple2Image from "../public/temple-2.png";
import temple3Image from "../public/temple-3.png";
import temple4Image from "../public/temple-4.png";
import temple5Image from "../public/temple-5.png";
import temple6Image from "../public/temple-6.png";
import temple7Image from "../public/temple-7.png";
import temple8Image from "../public/temple-8.png";
import temple9Image from "../public/temple-9.png";
import temple10Image from "../public/temple-10.png";
import temple11Image from "../public/temple-11.png";

import ImageWrapper from "../src/components/ImageWrapper";

/**
 * Get started page
 */
export default function GetStarted() {
    return (
        <div className="pb-8">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Get Started</h1>
                <p className="body-text-large italic">
                    Just follow the step-by-step guide beneath and you should be ready to go in a couple of minutes!
                </p>
            </div>
            
            <div className="pt-8 px-8">
                <div className="indent">
                    <p>Invest in TZMINT now! Three quick steps to get your TZM tokens:</p>
                    <ul className="list-disc list-inside">
                        <li>Sign in with your e-mail.</li>
                        <li>Setup and connect your wallet.</li>
                        <li>Get your testnet tez.</li>
                        <li>Invest in TZMINT.</li>
                    </ul>
                </div>
                <p className="mt-4">
                    The following step-by-step get started instructions help you set up everything you need to buy and sell TZM tokens on this platform.  
                    <span className="font-bold"> These tokens do not represent claims to a real investment but are only issued as part of an educational project - They do not hold any value.</span>
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8"><span className="highlight">Signing-in</span></h2>
                <p>
                    To sign in, please click on the <span className="font-semibold italic">Sign in</span> button in the top right corner.
                </p>
                <p className="mt-4">
                    You can now choose between <span className="font-semibold italic">two ways to sign in</span>:
                </p>
                <div className="ml-8">
                    <ul className="list-disc list-inside">
                        <li>with your email, or</li>
                        <li>with Google.</li>
                    </ul>
                </div>
                <p className="mt-4">
                    To sign in with your <span className="font-semibold">email</span>, type in your email address into the field and click on <span className="font-semibold italic">Sign in with Email</span>. You will receive a sign-in link to your email address. <br/>
                    Just click on the <span className="font-semibold italic">Sign in</span> button in the email and you will be redirected to the platform.
                </p>
                <p className="mt-4">
                    To sign in with your <span className="font-semibold">Google account</span>, click on the button labeled <span className="font-semibold italic">Sign in with Google</span>. This will redirect you to the Google account login. 
                    Once you logged in, your platform account information will appear under the <span className="italic">My Profile</span> tab.
                </p>
                <p className="mt-4">
                    Now, you have an account on the platform! We still need to <span className="font-semibold">connect your wallet</span> for you to be able to buy and sell TZM.
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8"><span className="highlight">Connecting my wallet</span></h2>
                <p>
                    As soon as you are logged in, the platform will ask you to connect your wallet. While you have not connected a wallet, every time you navigate to the <span className="font-semibold italic">Profile</span> section a pop-up will appear asking you to select your preferred wallet.
                </p>
                <p className="mt-4">
                    You have to decide whether you want to pair your wallet on the same device or another device.
                </p>
                <p className="mt-4">
                    To pair your wallet on an external device, just click on the button <span className="font-semibold italic">Pair wallet on another device</span>, a QR code becomes visible. Scan the QR code with a Beacon-compatible wallet, and you are set.
                </p>
                <p className="mt-4">
                    For pairing with the same device, you can either connect your wallet through a <span className="font-semibold">browser extension or connect the platform to either desktop and web wallets, or mobile wallets.</span>
                </p>
                <p className="mt-4">
                    You can choose between:
                </p>
                <div className="ml-8">
                    <ul className="list-disc list-inside">
                        <li><a className="font-family-body font-semibold" href="https://chrome.google.com/webstore/detail/spire/gpfndedineagiepkpinficbcbbgjoenn?hl=en" target="_blank" rel="noreferrer">Spire</a> and <a className="font-family-body font-semibold" href="https://templewallet.com/" target="_blank" rel="noreferrer">Temple Wallet</a> - if you want to connect through a browser extension,</li>
                        <li><a className="font-family-body font-semibold" href="https://cryptonomic.tech/galleon.html" target="_blank" rel="noreferrer">Galleon</a>, <a className="font-family-body font-semibold" href="https://wallet.kukai.app/" target="_blank" rel="noreferrer">Kukai Wallet</a>, or <a className="font-family-body font-semibold" href="https://umamiwallet.com/" target="_blank" rel="noreferrer">Umami</a> - if you want to connect a desktop or web wallet, and</li>
                        <li><a className="font-family-body font-semibold" href="https://airgap.it/" target="_blank" rel="noreferrer">AirGap Wallet</a> - if you want to connect through a mobile wallet.</li>
                    </ul>
                </div>
                <p className="mt-4">
                    In case you want to use the <span className="font-semibold">Temple Wallet</span>, this is your road to success:
                </p>
                <div>
                    <ol className="list-decimal list-inside">
                        <li>Install the <span className="font-semibold">Temple Wallet extension</span> for your browser. If your using Google Chrome, just go to the <a className="font-family-body font-semibold" href="https://chrome.google.com/webstore/detail/temple-tezos-wallet-ex-th/ookjlbkiijinhpmnjffcofjonbfbgaoc?hl=en" target="_blank" rel="noreferrer">Chrome Web Store</a> and add the extension for Temple.</li>
                        <li>Once the extension is added, Temple will ask you whether you want to create a new wallet - in case you do not have a wallet yet - or import your existing wallet.</li>
                        <div className="w-full mt-4">
                            <ImageWrapper src={temple1Image} alt=""/>
                        </div>
                        <p className="mt-4">
                            In case you need to create a new wallet, just click on the right-side button.
                        </p>
                        <p className="mt-4">
                            It will then ask you to provide the password you would like to use, repeat it for confirmation, and accept the terms.
                        </p>
                        <div className="w-full mt-4">
                            <ImageWrapper src={temple2Image} alt=""/>
                        </div>
                        <p className="mt-4">
                            After clicking <span className="font-semibold italic">Create</span>, you will be directed to the backup of your seed phrase.
                        </p>
                        <div className="w-full mt-4">
                            <ImageWrapper src={temple3Image} alt=""/>
                        </div>
                        <p className="mt-4">
                            Save your seed phrase somewhere safe - for example, on a piece of paper. Then confirm you made a backup by ticking the box and clicking <span className="font-semibold italic">Continue</span>.
                        </p>
                        <p className="mt-4">
                            Now, verify your seed phrase, and click <span className="font-semibold italic">Finish</span>.
                        </p>
                        <div className="w-full mt-4">
                            <ImageWrapper src={temple4Image} alt=""/>
                        </div>
                        <li>Now you have to pair your wallet, but first, make sure you <span className="font-semibold">select the correct network</span>. Go to your Temple extension. It should be set by default to the Mainnet, but you want the Granada Testnet for this platform. Just navigate to the upper right-hand corner and click on <span className="font-semibold italic">Tezos Mainnet</span>. This opens a drop-down menu with all available networks to select from. Select <span className="font-semibold italic">Granada Testnet</span>.</li>
                        <p className="mt-4">
                            <div className="w-full mt-4">
                                <ImageWrapper src={temple6Image} alt=""/>
                            </div>
                        </p>
                        <li>As you will need your address to pair your wallet and receive testnet tokens, click on <span className="font-semibold italic">Receive</span>. Your address will be displayed, and you can copy it to the clipboard to have it ready.</li>
                        <p className="mt-4">
                            <div className="w-full mt-4">
                                <ImageWrapper src={temple7Image} alt=""/>
                            </div>
                        </p>
                        <li>To <span className="font-semibold">pair your wallet</span>, go to your <span className="font-semibold italic">Profile</span>, paste in your address from your Temple Wallet, and click <span className="font-semibold italic">Fetch</span>. A pop-up will open asking you to choose your preferred wallet. Click on <span className="font-semibold italic">Temple - Tezos Wallet (ex. Thanos)</span>.</li>
                            <div className="w-full mt-4">
                                <ImageWrapper src={temple8Image} alt=""/>
                            </div>
                        <li>The Temple Wallet wants you to then confirm the connection; the wallet asks you for a permission request through a pop-up. Just click on <span className="font-semibold italic">Connect</span>.</li>
                            <div className="w-full mt-4">
                                <ImageWrapper src={temple9Image} alt=""/>
                            </div>
                        <li>You should now see that the <span className="font-semibold italic">Address</span> field in your Profile is filled out.</li>
                    </ol>
                </div>
                <p className="indent">
                    Your Temple Wallet extension should now look similar to this:
                </p>
                <div className="w-full mt-4 sm:w-1/2 sm:m-auto">
                    <ImageWrapper src={temple10Image} alt=""/>
                </div>
                <p className="mt-4">
                    As you can see, there is one minor difference: You do not have any tez (XTZ) to spend yet, so let’s get some Granada testnet tez!
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8"><span className="highlight">Getting my first Granada Testnet tez</span></h2>
                <p>
                    Now that you have signed in and connected your wallet, it’s time to get some Granada Testnet tez!
                </p>
                <p className="mt-4">
                    The easiest way to get some tez is to go via the Telegram <span className="font-semibold">Faucet Bot</span>. <br/>
                    You will need a Telegram account to use it. Also, make sure you selected Granadanet and not the Mainnet. <br/>
                    To use the bot, go to the <a className="font-family-body font-semibold" href="https://t.me/tezos_faucet_bot" target="_blank" rel="noreferrer">Faucet Bot</a> the chat should open up.<br/>
                </p>
                <p className="mt-4">
                    Now, click on <span className="font-semibold italic">Get coins</span>. The bot will now ask you for your address. <br/>
                    Send your address and then the Faucet Bot will let you know how much tez you claimed for which testnet.
                </p>
                <div className="pt-4 flex justify-between content-center flex-col sm:flex-row">
                    <div className="sm:w-1/2 flex content-center">
                        <ImageWrapper src={temple11Image} alt=""/>
                    </div>
                    <div className="mt-8 sm:ml-8 sm:mt-0 sm:w-1/2 flex flex-col justify-center">
                        <p>
                            Once you claim coins, they should also appear in your wallet - if you used Temple, it appears in your extension.
                        </p>
                        <p className="mt-4">
                            As you can see, we claimed 100 tez (XTZ).
                        </p>
                        <p className="mt-4">
                            You are ready to buy and sell the TZM token for tez on the platform, just navigate to the <span className="font-semibold Italic">Buy & Sale</span> page. Enjoy!
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-between py-12 px-8">
                <CtaCard href="/https://tezos.b9lab.com/cso-project" text="Take a look at the B9lab Tezos Developer Platform. &#8594;" title="Ready to develop a Rolling SAFE?" classes="sm:pr-2"/>
                <CtaCard href="/general-investment-info" text="Next page &#8594;" title="Want to get an overview of the Rolling SAFE offering?" classes="sm:pl-2"/>
            </div>

        </div>
    );
}
