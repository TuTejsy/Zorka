import { call, fork, take, putResolve } from 'redux-saga/effects';

import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';

import { actionTypes } from 'appApi/client';

export default function* () {
    const localization: null | string = yield call(Keychain.getItem, KEYCHAIN.KEYS.LOCALIZATIONS);

    if (!!localization) {
        yield putResolve({
            type: actionTypes.APP_LOCALIZATION_CHANGE,
            payload: localization
        });
    }

    yield fork(watchLocalizationChange);
}

function* watchLocalizationChange() {
    while(true) {
        const {
            payload: localization
        }: { payload: string } = yield take(actionTypes.APP_LOCALIZATION_CHANGE);

        yield call(Keychain.setItem, KEYCHAIN.KEYS.LOCALIZATIONS, localization);
    }
}
