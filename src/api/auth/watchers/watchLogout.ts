import { call, fork, take } from 'redux-saga/effects';
import { SHA512, enc, AES } from 'crypto-js';
import RNFS from 'react-native-fs';
import { Share } from 'react-native';

import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';
import { CryptoDB } from 'appDatabase';
import { operations } from 'appApi';

import authTypes from '../action-types';

export default function* () {
    yield fork(watchLogout);
}

function* watchLogout() {
    while(true) {
        yield take(authTypes.LOGOUT);

        yield call(operations.setupRootGetStartedScreen);

        Keychain.removeItem(KEYCHAIN.KEYS.SECRET_PHRASE);
        CryptoDB.dropDatabase();
    }
}
