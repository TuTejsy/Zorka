import { combineReducers } from 'redux';
import { Creator } from 'appUtils';

import { actionTypes } from 'appApi/client';

const backupStatusReducer = Creator.reducer(false, {
    [actionTypes.BACKUP_SAVE]: (state, action) => true,
    [actionTypes.BACKUP_SAVE_SUCCESS]: (state, action) => false,
});

const cryptoListStatusReducer = Creator.reducer(false, {
    [actionTypes.UPDATE_CRYPTO_LIST]: (state, action) => true,
    [actionTypes.CRYPTO_LIST_UPDATED]: (state, action) => false,
});


export default combineReducers({
    isBackupSaving: backupStatusReducer,
    isCryptoListUpdating: cryptoListStatusReducer,
});
