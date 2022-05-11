import { take, fork, put } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';


import { actionTypes } from 'appApi/client';


export default function* () {
    yield fork(watchUpdateAllCryptoWalletsInfo);
}

function* watchUpdateAllCryptoWalletsInfo() {
    while(true) {
        yield take(actionTypes.UPDATE_ALL_CRYPTO_WALLETS_INFO);

        const cryptoWallets = CryptoDB
            .objects()
            .filtered('publicAddress != nil');

        for (let i = 0; i < cryptoWallets.length; i++) {
            yield put({
                type: actionTypes.UPDATE_CRYPTO_WALLET_INFO,
                payload: {
                    cryptoId: cryptoWallets[i].id
                }
            });

            yield take(actionTypes.CRYPTO_WALLET_INFO_UPDATED);
        }
    }
}
