import { all } from 'redux-saga/effects';

import { authSaga } from './auth';
import { cryptoSaga } from './crypto';
import { appStateSaga } from './app-state';
import { navigationSaga } from './navigation';

export function* rootSaga(dispatch) {
    yield all([
        authSaga(dispatch),
        cryptoSaga(dispatch),
        appStateSaga(dispatch),
        navigationSaga(dispatch),
    ]);
}
