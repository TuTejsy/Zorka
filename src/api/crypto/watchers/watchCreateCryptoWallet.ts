import Bitcore from 'bitcore-lib';
import { call, fork, take } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';
import { CURRENCY } from 'appConstants';

import cryptoTypes from '../action-types';

export default function* () {
    yield fork(watchCreateCryptoWallet);
}

function* watchCreateCryptoWallet() {
    while(true) {
        yield take(cryptoTypes.CREATE_CRYPTO_WALLET);

        const bitcoreKey = new Bitcore.PrivateKey();
        const privateWif: string = bitcoreKey.toWIF();
        const privateKey: string = bitcoreKey.toString();
        const publicAddress: string = bitcoreKey.toAddress().toString();

        const btcCrypto = CryptoDB.object(CURRENCY.ID.BTC);

        if (btcCrypto) {
            CryptoDB.modify(() => {
                btcCrypto.privateWif = privateWif;
                btcCrypto.privateKey = privateKey;
                btcCrypto.publicAddress = publicAddress;
            });
        }
    }
}
