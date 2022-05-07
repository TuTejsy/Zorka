import { combineReducers } from 'redux';
import { Creator } from 'appUtils';

import { actionTypes } from 'appApi/client';

const loginStatusReducer = Creator.reducer(false, {
    [actionTypes.SIGN_IN]: (state, action) => true,
    [actionTypes.SIGN_UP]: (state, action) => true,
    [actionTypes.LOGOUT]: (state, action) => false,
});

export default combineReducers({
    isLoggedIn: loginStatusReducer,
});
