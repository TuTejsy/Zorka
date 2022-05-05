import { authReducer } from './auth';
import { cryptoReducer } from './crypto';
import { appStateReducer } from './app-state';

export const reducers = {
    auth: authReducer,
    crypto: cryptoReducer,
    appState: appStateReducer,
};

export const middlewares = [];
