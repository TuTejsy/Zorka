import types from './action-types';

const changeAppState = (payload: undefined) => ({
    type: types.APP_STATE_CHANGE,
    payload,
});

const changeAppLoadingState = (payload: undefined) => ({
    type: types.APP_STATE_LOADING_CHANGE,
    payload,
});

export default {
    changeAppState,
    changeAppLoadingState,
};
