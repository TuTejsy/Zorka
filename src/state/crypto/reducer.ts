import { combineReducers } from 'redux';
import { Creator } from 'appUtils';
import { CURRENCY } from 'appConstants';

import { actionTypes } from 'appApi/client';

const backupStatusReducer = Creator.reducer(false, {
    [actionTypes.BACKUP_SAVE]: (state, action) => true,
    [actionTypes.BACKUP_SAVE_SUCCESS]: (state, action) => false,
});

const cryptoListStatusReducer = Creator.reducer(false, {
    [actionTypes.UPDATE_CRYPTO_LIST]: (state, action) => true,
    [actionTypes.CRYPTO_LIST_UPDATED]: (state, action) => false,
});

const cryptoWalletInfoStatusDefaultState: {[key: string]: boolean} = {};
Object.values(CURRENCY.ID).forEach((id) => { cryptoWalletInfoStatusDefaultState[id] = false; });

const cryptoWalletInfoStatusReducer = Creator.reducer(cryptoWalletInfoStatusDefaultState, {
    [actionTypes.UPDATE_CRYPTO_WALLET_INFO]: (state, action: Action<UpdateCryptoBalancePayload>) => {
        const newState = { ...state };
        newState[action.payload.cryptoId as string] = true;

        return state;
    },
    [actionTypes.CRYPTO_WALLET_INFO_UPDATED]: (state, action: Action<CryptoBalanceUpdatedPayload>) => {
        const newState = { ...state };
        newState[action.payload.cryptoId as string] = false;

        return state;
    },
});


export default combineReducers({
    isBackupSaving: backupStatusReducer,
    isCryptoListUpdating: cryptoListStatusReducer,
    isCryptoWalletInfoUpdating: cryptoWalletInfoStatusReducer,
});
