import { BeaconWallet } from '@taquito/beacon-wallet';
import { NetworkType } from '@airgap/beacon-sdk';
import { DAppClientOptions } from '@airgap/beacon-sdk';

export default class WalletHandler {
    wallet: BeaconWallet;
    walletOptions: DAppClientOptions;
    networkType: NetworkType;

    constructor() {
        this.walletOptions = {
            name: 'Student Certifier'
        };
        this.networkType = NetworkType.FLORENCENET;
        this.wallet = new BeaconWallet(this.walletOptions);
    }

    async getAddress(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.wallet.requestPermissions({
                network: {
                    type: this.networkType
                }
            })
            .then(() => this.wallet.getPKH())
            .then((address: string) => {
                resolve(address);
            })
            .catch(reject);
        });
    }

}
