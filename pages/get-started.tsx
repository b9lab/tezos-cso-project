export default function GetStarted() {
    return (
        <div className="mb-20">

            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-light-gray to-gray-300">
                <h1 className="mb-8">Get Started</h1>
                <div className="body-text-large italic">
                    Let’s dive right into it! To help you get started, we have a quick step-by-step guide.
                </div>
            </div>

            <div className="pt-12 px-8">
                <div className="indent">
                    To interact with the platform, you first need to <span className="font-semibold">sign in and connect your wallet</span>. 
                    Afterwards, you will be able to buy and sell tokens through the platform using tez on the Florence testnet.<br/>
                    To have tez, just go to the following <a className="font-family-body font-semibold text-accent-1" href="https://www.google.com/" target="_blank" rel="noreferrer">faucet</a>.
                </div>

                <div className="mt-4 font-semibold">
                    Just follow the step-by-step guide beneath and you should be ready to go in a couple of minutes!
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8">
                    Signing in
                </h2>
                <div>
                    To sign in, please click on the <span className="font-semibold italic">Sign in</span> button in the top right corner.
                </div>
                <div className="mt-4">
                    You can now choose between <span className="font-semibold italic">two ways to sign</span>:
                </div>
                <div className="ml-4">
                    - with your email, or <br/>
                    - with Google. <br/>
                </div>
                <div className="mt-4">
                    To sign in with your <span className="font-semibold">email</span>, type in your email address into the field and click on <span className="font-semibold italic">Sign in with Email</span>. You will receive a sign in link to your email address. <br/>
                    Just click on the <span className="font-semibold italic">Sign in</span> button in the email and you will be redirected to the platform.
                </div>
                <div className="mt-4">
                    To sign in with your <span className="font-semibold">Google account</span>, click on the button labeled <span className="font-semibold italic">Sign in with Google</span>. This will redirect you to the Google account login. 
                    Once you logged in, your platform account information will appear under the <span className="italic">My Profile</span> tab.
                </div>
                <div className="mt-4">
                    Now, you have an account on the platform! We still need to <span className="font-semibold">connect your wallet</span> for you to be able to buy and sell TZM.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8">
                    Connecting my wallet
                </h2>
                <div>
                    As soon as you are logged in, the platform will ask you to connect your wallet. While you have not connected a wallet, everytime you navigate to the <span className="font-semibold italic">Profile</span> section a pop-up will appear asking you to select your preferred wallet.
                </div>
                <div className="mt-4">
                    You have to decide whether you want to pair your wallet on the same device or another device.
                </div>
                <div className="mt-4">
                    To pair your wallet on an external device, just click on the button <span className="font-semibold italic">Pair wallet on another device</span>, a QR code becomes visible. Scan the QR code with a Beacon-compatible wallet, and you are set.
                </div>
                <div className="mt-4">
                    For pairing with the same device, you can either connect your wallet through a <span className="font-semibold">browser extension or connect the platform to either desktop and web wallets, or mobile wallets.</span>
                </div>
                <div className="mt-4">
                    You can choose between:
                </div>
                <div className="ml-4">
                    - <a className="font-family-body font-semibold text-accent-1" href="https://chrome.google.com/webstore/detail/spire/gpfndedineagiepkpinficbcbbgjoenn?hl=en" target="_blank" rel="noreferrer">Spire</a> and <a className="font-family-body font-semibold text-accent-1" href="https://templewallet.com/" target="_blank" rel="noreferrer">Temple Wallet</a> - if you want to connect through a browser extension, <br/>
                    - <a className="font-family-body font-semibold text-accent-1" href="https://cryptonomic.tech/galleon.html" target="_blank" rel="noreferrer">Galleon</a>, <a className="font-family-body font-semibold text-accent-1" href="https://wallet.kukai.app/" target="_blank" rel="noreferrer">Kukai Wallet</a>, or <a className="font-family-body font-semibold text-accent-1" href="https://umamiwallet.com/" target="_blank" rel="noreferrer">Umami</a> - if you want to connect a desktop of web wallet, and <br/>
                    - The <a className="font-family-body font-semibold text-accent-1" href="https://airgap.it/" target="_blank" rel="noreferrer">AirGap Wallet</a> - if you want to connect through a mobile wallet.
                </div>
                <div className="mt-4">
                    To connect your wallet, follow these steps.
                </div>
            </div>

            <div className="pt-12 px-8">
                <h2 className="mb-8">
                    Getting my first Florence testnet tez
                </h2>
            </div>


        </div>
    );
}
