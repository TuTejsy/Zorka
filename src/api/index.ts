import { all } from 'redux-saga/effects';

import { authSaga, authReducer } from './auth';
import { navigationSaga, navigationActionCreators } from './navigation';

export const types = {};

export const reducers = {
    auth: authReducer,
};

export const operations = {};

export function* rootSaga(
    dispatch: (props: { type: string; payload: any }) => void,
) {
    yield all([authSaga(dispatch), navigationSaga(dispatch)]);
}

export const actionCreators = {
    ...navigationActionCreators,
};

export const middlewares = [];
