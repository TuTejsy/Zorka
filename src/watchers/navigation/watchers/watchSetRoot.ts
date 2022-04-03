import { call } from 'redux-saga/effects';

import { KEYCHAIN } from 'appConstants';
import { Keychain } from 'appUtils';
import { operations } from 'appOperations';

export default function* () {
    const secretPhrase: string | null = yield call(
        Keychain.getItem,
        KEYCHAIN.KEYS.SECRET_PHRASE,
    );

    if (secretPhrase) {
        yield call(operations.setupRootCryptoScreen);
    } else {
        yield call(operations.setupRootGetStartedScreen);
    }
}
