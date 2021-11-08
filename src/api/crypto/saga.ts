import { fork, cancel, take, race } from 'redux-saga/effects';

import {
    watchUpdateCryptoList,
    watchCreateCryptoWallet,
} from './watchers';

function* authSaga(dispatch) {
    yield fork(watchUpdateCryptoList);
    yield fork(watchCreateCryptoWallet);
}

export default authSaga;
