import { call } from 'redux-saga/effects';

import { KEYCHAIN } from 'appConstants';
import { Keychain } from 'appUtils';
import navigationOperations from '../operations';

export default function* () {
    const secretPhrase: string | null = yield call(
        Keychain.getItem,
        KEYCHAIN.KEYS.SECRET_PHRASE,
    );

    if (secretPhrase) {
        yield call(navigationOperations.setupRootCryptoScreen);
    } else {
        yield call(navigationOperations.setupRootGetStartedScreen);
    }
}
