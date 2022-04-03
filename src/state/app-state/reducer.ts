import { combineReducers } from 'redux';
import { Creator } from 'appUtils';
import { APP_STATE } from 'appConstants';
import { actionTypes } from 'appApi/client';

const appStateReducer = Creator.reducer(APP_STATE.active, {
    [actionTypes.APP_STATE_CHANGE]: (state, action) => action.payload,
});

const loadingStateReducer = Creator.reducer(true, {
    [actionTypes.APP_STATE_LOADING_CHANGE]: (state, action) => action.payload,

    [actionTypes.USER_LOGGED_OUT]: (state, action) => true,
});

export default combineReducers({
    state: appStateReducer,
    isLoading: loadingStateReducer,
});
