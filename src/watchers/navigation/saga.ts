import { fork } from 'redux-saga/effects';

import { watchSetRoot, watchNavigationActions } from './watchers';

function* navigationStateSaga(dispatch) {
    yield fork(watchSetRoot);
    yield fork(watchNavigationActions);
}

export default navigationStateSaga;
