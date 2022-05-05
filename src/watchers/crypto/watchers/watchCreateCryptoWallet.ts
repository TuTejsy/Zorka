import Bitcore, { Networks } from 'bitcore-lib';
import { put, fork, take } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';
import { CURRENCY } from 'appConstants';
import { actionTypes } from 'appApi/client';

export default function* () {
    yield fork(watchCreateCryptoWallet);
}

function* watchCreateCryptoWallet() {
    while(true) {
        yield take(actionTypes.CREATE_CRYPTO_WALLET);

        const bitcoreKey = new Bitcore.PrivateKey(undefined, Networks.testnet);
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

        yield put({
            type: actionTypes.BACKUP_SAVE
        });
    }
}
