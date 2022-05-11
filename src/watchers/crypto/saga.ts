import { fork, cancel, take, race } from 'redux-saga/effects';

import {
    watchUpdateCryptoList,
    watchCreateCryptoWallet,
    watchUpdateCryptoWalletInfo,
    watchCryptoCreateTransaction,
    watchUpdateAllCryptoWalletsInfo,
} from './watchers';

function* cryptoSaga(dispatch) {
    yield fork(watchUpdateCryptoList);
    yield fork(watchCreateCryptoWallet);
    yield fork(watchUpdateCryptoWalletInfo);
    yield fork(watchCryptoCreateTransaction);
    yield fork(watchUpdateAllCryptoWalletsInfo);
}

export default cryptoSaga;
