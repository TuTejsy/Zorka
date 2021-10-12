import { combineReducers } from 'redux';

import { Creator } from 'appUtils';
import { authTypes } from 'appApi/auth';

import types from './action-types';
import { APP_STATE } from './constants';

const appStateReducer = Creator.reducer(APP_STATE.active, {
  [types.APP_STATE_CHANGE]: (state, action) => action.payload,
});

const loadingStateReducer = Creator.reducer(true, {
  [types.APP_STATE_LOADING_CHANGE]: (state, action) => action.payload,

  [authTypes.USER_LOGGED_OUT]: (state, action) => true,
});

export default combineReducers({
  state: appStateReducer,
  isLoading: loadingStateReducer,
});
