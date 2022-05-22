import { fork } from 'redux-saga/effects';

import {
    watchLocalizationChange
} from './watchers';

function* appStateSaga(dispatch) {
    yield fork(watchLocalizationChange);
}

export default appStateSaga;
