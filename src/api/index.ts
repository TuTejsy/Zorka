import { all } from 'redux-saga/effects';

import {
    authSaga,
    authReducer,
    authActionTypes,
    authActionCreators,
} from './auth';
import {
    navigationSaga,
    navigationOperations,
    navigationActionCreators,
} from './navigation';

export const types = {
    ...authActionTypes,
};

export const reducers = {
    auth: authReducer,
};

export const operations = {
    ...navigationOperations,
};

export function* rootSaga(
    dispatch: (props: { type: string; payload: any }) => void,
) {
    yield all([authSaga(dispatch), navigationSaga(dispatch)]);
}

export const actionCreators = {
    ...authActionCreators,
    ...navigationActionCreators,
};

export const middlewares = [];
