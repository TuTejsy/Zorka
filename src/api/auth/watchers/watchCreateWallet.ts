import { call, fork, take } from 'redux-saga/effects';

import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';
import { operations } from 'appApi';

import authTypes from '../action-types';

export default function* () {
    yield fork(watchCreateWallet);
}

function* watchCreateWallet() {
    while (true) {
        const {
            payload: { secretPhrase },
        }: { payload: CreateWalletPayload } = yield take(
            authTypes.CREATE_WALLET,
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
