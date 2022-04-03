import { authReducer } from './auth';
import { appStateReducer } from './app-state';

export const reducers = {
    auth: authReducer,
    appState: appStateReducer,
};

export const middlewares = [];
