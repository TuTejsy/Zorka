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


import {
    cryptoSaga,
    cryptoOperations,
    cryptoActionTypes,
    cryptoActionCreators,
} from './crypto';

export const types = {
    ...authActionTypes,
    ...cryptoActionTypes,
};

export const reducers = {
    auth: authReducer,
};

export const operations = {
    ...cryptoOperations,
    ...navigationOperations,
};

export function* rootSaga(
    dispatch: (props: { type: string; payload: any }) => void,
) {
    yield all([
        authSaga(dispatch),
        cryptoSaga(dispatch),
        navigationSaga(dispatch)
    ]);
}

export const actionCreators = {
    ...authActionCreators,
    ...cryptoActionCreators,
    ...navigationActionCreators,
};

export const middlewares = [];
