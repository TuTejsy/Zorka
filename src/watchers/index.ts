import { all } from 'redux-saga/effects';

import { authSaga } from './auth';
import { cryptoSaga } from './crypto';
import { navigationSaga } from './navigation';

export function* rootSaga(dispatch) {
    yield all([
        authSaga(dispatch),
        cryptoSaga(dispatch),
        navigationSaga(dispatch),
    ]);
}
