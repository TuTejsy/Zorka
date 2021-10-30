import { fork, cancel, take, race } from 'redux-saga/effects';

import { watchCreateWallet } from './watchers';

function* authSaga(dispatch) {
    yield fork(watchCreateWallet);
}

export default authSaga;
