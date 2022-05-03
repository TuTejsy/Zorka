import { call, fork, take } from 'redux-saga/effects';

import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';
import { operations } from 'appOperations';

import { actionTypes } from 'appApi/client';

export default function* () {
    yield fork(watchCreateZorkaWallet);
}

function* watchCreateZorkaWallet() {
    while(true) {
        const {
            payload: { secretPhrase },
        }: { payload: CreateZorkaWalletPayload } = yield take(
            actionTypes.CREATE_ZORKA_WALLET,
        );

        if (secretPhrase) {
            yield call(
                Keychain.setItem,
                KEYCHAIN.KEYS.SECRET_PHRASE,
                secretPhrase,
            );

            yield call(operations.setupRootCryptoScreen);
        }
    }
}
