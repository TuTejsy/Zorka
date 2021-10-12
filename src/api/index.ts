import { all } from 'redux-saga/effects';

import { authSaga, authReducer } from './auth';

export const types = {};

export const reducers = {
  auth: authReducer,
};

export const operations = {};

export function* rootSaga(
  dispatch: (props: { type: string; payload: any }) => void,
) {
  console.log(dispatch);
  yield all([authSaga(dispatch)]);
}

export const actionCreators = {};

export const middlewares = [];
