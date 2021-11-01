import { fork, cancel, take, race } from 'redux-saga/effects';

import { watchUpdateCryptoList } from './watchers';

function* authSaga(dispatch) {
    yield fork(watchUpdateCryptoList);
}

export default authSaga;
