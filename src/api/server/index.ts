import * as authOperations from './auth';
import * as cryptoOperations from './crypto';


export const ServerAPI = {
    ...authOperations,
    ...cryptoOperations,
};
