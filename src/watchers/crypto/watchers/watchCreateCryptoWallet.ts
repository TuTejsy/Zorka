import Bitcore, { Networks } from 'bitcore-lib';
import { put, fork, take } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';
import { actionTypes } from 'appApi/client';

export default function* () {
    yield fork(watchCreateCryptoWallet);
}

function* watchCreateCryptoWallet() {
    while(true) {
        const {
            payload: {
                cryptoId
            } }: {
            payload: CreateCryptoWalletPayload
        } = yield take(actionTypes.CREATE_CRYPTO_WALLET);

        const bitcoreKey = new Bitcore.PrivateKey(undefined, Networks.testnet);
        const privateWif: string = bitcoreKey.toWIF();
        const privateKey: string = bitcoreKey.toString();
        const publicAddress: string = bitcoreKey.toAddress().toString();

        const crypto = CryptoDB.object(cryptoId);

        if (crypto) {
            CryptoDB.modify(() => {
                crypto.privateWif = privateWif;
                crypto.privateKey = privateKey;
                crypto.publicAddress = publicAddress;
            });
        }

        yield put({
            type: actionTypes.BACKUP_SAVE
        });
    }
}
