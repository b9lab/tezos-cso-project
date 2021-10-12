import React from "react";
import tutorial1Image from "../public/tutorial-1.png";
import tutorial2Image from "../public/tutorial-2.png";
import tutorial3Image from "../public/tutorial-3.png";
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
                <p className="indent">
                    Invest in TZMINT now! Three quick steps to get your TZM tokens:
                    <ul className="list-disc ml-8">
                        <li>Sign in with your e-mail.</li>
                        <li>Setup and connect your wallet with tez.</li>
                        <li>Invest in TZMINT.</li>
                    </ul>
                </p>
                <p className="mt-4">
                    The following step-by-step get started instructions help you set up everything you need to buy and sell TZM tokens on this platform.  
                    <span className="font-bold"> These tokens do not represent claims to a real investment but are only issued as part of an educational project. They do not hold any value.</span>
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    Signing in
                </h2>
                <p>
                    To sign in, please click on the <span className="font-semibold italic">Sign in</span> button in the top right corner.
                </p>
                <p className="mt-4">
                    You can now choose between <span className="font-semibold italic">two ways to sign</span>:
                </p>
                <div className="ml-8">
                    <ul className="list-disc">
                        <li>with your email, or</li>
                        <li>with Google.</li>
                    </ul>
                </div>
                <p className="mt-4">
                    To sign in with your <span className="font-semibold">email</span>, type in your email address into the field and click on <span className="font-semibold italic">Sign in with Email</span>. You will receive a sign in link to your email address. <br/>
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
                <h2 className="mb-8 highlight">
                    Connecting my wallet
                </h2>
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
                    <ul className="list-disc">
                        <li><a className="font-family-body font-semibold" href="https://chrome.google.com/webstore/detail/spire/gpfndedineagiepkpinficbcbbgjoenn?hl=en" target="_blank" rel="noreferrer">Spire</a> and <a className="font-family-body font-semibold" href="https://templewallet.com/" target="_blank" rel="noreferrer">Temple Wallet</a> - if you want to connect through a browser extension,</li>
                        <li><a className="font-family-body font-semibold" href="https://cryptonomic.tech/galleon.html" target="_blank" rel="noreferrer">Galleon</a>, <a className="font-family-body font-semibold" href="https://wallet.kukai.app/" target="_blank" rel="noreferrer">Kukai Wallet</a>, or <a className="font-family-body font-semibold" href="https://umamiwallet.com/" target="_blank" rel="noreferrer">Umami</a> - if you want to connect a desktop of web wallet, and</li>
                        <li>The <a className="font-family-body font-semibold" href="https://airgap.it/" target="_blank" rel="noreferrer">AirGap Wallet</a> - if you want to connect through a mobile wallet.</li>
                    </ul>
                </div>
                <p className="mt-4">
                    In case you want to use <span className="font-semibold">Spire</span>, this is your road to success:
                </p>
                <div className="ml-8">
                    <ol className="list-decimal">
                        <li>Install the <span className="font-semibold">Spire extension</span> for your browser. If your using Google Chrome, just go to <a className="font-family-body font-semibold" href="https://chrome.google.com/webstore/detail/spire/gpfndedineagiepkpinficbcbbgjoenn?hl=en" target="_blank" rel="noreferrer">Spire</a> and add the extension. You will receive a popup message once it is added.</li>
                        <li>Now you have to pair your wallet, but first make sure you <span className="font-semibold">select the correct network</span>. Go to your Spire extension to the menu on the left upper corner and select <span className="font-semibold italic">Settings</span>. Under the network select <span className="font-semibold italic">Florencenet</span>.</li>
                        <li>To <span className="font-semibold">pair your wallet</span>, go to the <span className="font-semibold italic">Overview</span> in your Spire extension and click on <span className="font-semibold italic">Pair wallet</span>. Activate <span className="font-semibold italic">Enable Developer Mode</span> and <span className="font-semibold italic">Setup local secret</span>.</li>
                        <li>
                            In Spire, a permission request should pop up. It looks like this:
                            <div className="w-full mt-4">
                                <ImageWrapper src={tutorial1Image} alt=""/>
                            </div>
                        </li>
                        <li>You should now see that the <span className="font-semibold italic">Address</span> field is filled out.</li>
                    </ol>
                </div>
                <p className="mt-4">
                    Your Spire extension should now look like this.
                </p>
                <div className="w-full mt-4 sm:w-1/2 sm:m-auto">
                    <ImageWrapper src={tutorial2Image} alt=""/>
                </div>
                <p className="mt-4">
                    As you can see, you do not have any tez (XTZ) to spend, so let’s get some Florence testnet tez!
                </p>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8 highlight">
                    Getting my first Florence testnet tez
                </h2>
                <p>
                    Now that you have signed in and connected your wallet, it’s time to get some Florence testnet tez!
                </p>
                <p className="mt-4">
                    The easiest way to get some tez is to go via the Telegram <span className="font-semibold">Faucet Bot</span>. <br/>
                    You will need a Telegram account to use it. Also make sure you selected Florencenet and not the Mainnet. <br/>
                    To use the bot, go to <a className="font-family-body font-semibold" href="https://t.me/tezos_faucet_bot" target="_blank" rel="noreferrer">Faucet Bot</a> the chat should open up. <br/>
                    Now, click on <span className="font-semibold italic">Get coins</span>. The bot will now ask you for your address. <br/>
                    Send your address and then the Faucet Bot will let you know how much tez you claimed for which testnet.
                </p>
                <div className="pt-4 flex justify-between content-center flex-col sm:flex-row">
                    <div className="sm:w-1/2 flex content-center">
                        <ImageWrapper src={tutorial3Image} alt=""/>
                    </div>
                    <div className="mt-8 sm:ml-8 sm:mt-0 sm:w-1/2 flex flex-col justify-center">
                        <p>
                            Once you claim coins, they should also appear in your wallet - if you used Spire, it appears in your extension.
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
        </div>
    );
}
