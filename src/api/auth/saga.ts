import { fork, cancel, take, race } from 'redux-saga/effects';

import { watchSaveBackup, watchCreateWallet } from './watchers';

function* authSaga(dispatch) {
    yield fork(watchSaveBackup);
    yield fork(watchCreateWallet);
}

export default authSaga;
