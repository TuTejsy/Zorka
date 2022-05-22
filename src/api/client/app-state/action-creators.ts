import { LOCALIZATION_MODE } from 'appConstants';

import types from './action-types';


const changeAppState = (payload: undefined) => ({
    type: types.APP_STATE_CHANGE,
    payload,
});

const changeAppLoadingState = (payload: undefined) => ({
    type: types.APP_STATE_LOADING_CHANGE,
    payload,
});

const changeAppLocalization = (payload: keyof typeof LOCALIZATION_MODE) => ({
    type: types.APP_LOCALIZATION_CHANGE,
    payload,
});

export default {
    changeAppState,
    changeAppLocalization,
    changeAppLoadingState,
};
