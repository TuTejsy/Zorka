import { fork, cancel, take, race } from 'redux-saga/effects';

import {
    watchUpdateCryptoList,
    watchCryptoWalletInfo,
    watchCreateCryptoWallet,
    watchCryptoCreateTransaction,
} from './watchers';

function* cryptoSaga(dispatch) {
    yield fork(watchUpdateCryptoList);
    yield fork(watchCryptoWalletInfo);
    yield fork(watchCreateCryptoWallet);
    yield fork(watchCryptoCreateTransaction);
}

export default cryptoSaga;
