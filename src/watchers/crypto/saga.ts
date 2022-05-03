import { fork, cancel, take, race } from 'redux-saga/effects';

import {
    watchUpdateCryptoList,
    watchCreateCryptoWallet,
    watchCryptoWalletInfo,
} from './watchers';

function* cryptoSaga(dispatch) {
    yield fork(watchUpdateCryptoList);
    yield fork(watchCreateCryptoWallet);
    yield fork(watchCryptoWalletInfo);
}

export default cryptoSaga;
