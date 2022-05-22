import { combineReducers } from 'redux';
import { Creator } from 'appUtils';
import { APP_STATE, LOCALIZATION_MODE } from 'appConstants';
import { actionTypes } from 'appApi/client';

const appStateReducer = Creator.reducer(APP_STATE.active, {
    [actionTypes.APP_STATE_CHANGE]: (state, action) => action.payload as string,
});

const loadingStateReducer = Creator.reducer(true, {
    [actionTypes.APP_STATE_LOADING_CHANGE]: (state, action) => action.payload as boolean,

    [actionTypes.LOGOUT]: (state, action) => true,
});

const localizationReducer = Creator.reducer(LOCALIZATION_MODE.RU, {
    [actionTypes.APP_LOCALIZATION_CHANGE]: (state, action) => action.payload as string,
});

export default combineReducers({
    state: appStateReducer,
    isLoading: loadingStateReducer,
    localizationMode: localizationReducer,
});
