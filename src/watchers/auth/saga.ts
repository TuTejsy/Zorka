import { fork, cancel, take, race } from 'redux-saga/effects';

import {
    watchLogout,
    watchSaveBackup,
    watchEnterSecretPhrase,
    watchCreateZorkaWallet,
} from './watchers';

function* authSaga(dispatch) {
    yield fork(watchLogout);
    yield fork(watchSaveBackup);
    yield fork(watchEnterSecretPhrase);
    yield fork(watchCreateZorkaWallet);
}

export default authSaga;
