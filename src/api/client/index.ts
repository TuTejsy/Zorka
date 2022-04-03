import { authActionTypes, authActionCreators } from './auth';
import { cryptoActionTypes, cryptoActionCreators } from './crypto';
import { navigationTypes, navigationActionCreators } from './navigation';
import { appStateActionTypes, appStateActionCreators } from './app-state';

export const actionTypes = {
    ...authActionTypes,
    ...navigationTypes,
    ...cryptoActionTypes,
    ...appStateActionTypes,
};

export const actionCreators = {
    ...authActionCreators,
    ...cryptoActionCreators,
    ...appStateActionCreators,
    ...navigationActionCreators,
};
