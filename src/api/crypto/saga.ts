import { fork, cancel, take, race } from 'redux-saga/effects';

import {
    watchUpdateCryptoList,
    watchCreateCryptoWallet,
    watchCryptoWalletBalance,
} from './watchers';

function* authSaga(dispatch) {
    yield fork(watchUpdateCryptoList);
    yield fork(watchCreateCryptoWallet);
    yield fork(watchCryptoWalletBalance);
}

export default authSaga;
