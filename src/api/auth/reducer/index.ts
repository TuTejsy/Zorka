import { combineReducers } from 'redux';
import { Creator } from 'appUtils';

import types from './action-types';

const loginStatusReducer = Creator.reducer(false, {
  [types.SIGN_IN]: (state, action) => true,
  [types.SIGN_UP]: (state, action) => false,
});

export default combineReducers({
  isLoggedIn: loginStatusReducer,
});
