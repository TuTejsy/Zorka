import { call, fork, take } from 'redux-saga/effects';

import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';
import { operations } from 'appOperations';
import { actionTypes } from 'appApi/client';


export default function* () {
    yield fork(watchLogout);
}

function* watchLogout() {
    while(true) {
        yield take(actionTypes.LOGOUT);

        yield call(operations.setupRootGetStartedScreen);

        Keychain.removeItem(KEYCHAIN.KEYS.SECRET_PHRASE);
        yield call(operations.dropAndCloseLocalDB);
    }
}
