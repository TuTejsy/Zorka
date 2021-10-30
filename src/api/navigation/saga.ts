import { fork } from 'redux-saga/effects';

import { watchNavigationActions } from './watchers';

function* navigationStateSaga(dispatch) {
    yield fork(watchNavigationActions);
}

export default navigationStateSaga;
