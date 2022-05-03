import { fork, cancel, take, race } from 'redux-saga/effects';

import {
    watchLogout,
    watchSaveBackup,
    watchCreateZorkaWallet,
} from './watchers';

function* authSaga(dispatch) {
    yield fork(watchLogout);
    yield fork(watchSaveBackup);
    yield fork(watchCreateZorkaWallet);
}

export default authSaga;
