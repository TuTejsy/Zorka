import { fork, cancel, take, race } from 'redux-saga/effects';

import {
    watchLogout,
    watchSaveBackup,
    watchCreateWallet,
} from './watchers';

function* authSaga(dispatch) {
    yield fork(watchLogout);
    yield fork(watchSaveBackup);
    yield fork(watchCreateWallet);
}

export default authSaga;
