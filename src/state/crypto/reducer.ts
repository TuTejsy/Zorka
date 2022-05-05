import { combineReducers } from 'redux';
import { Creator } from 'appUtils';

import { actionTypes } from 'appApi/client';

const backupStatusReducer = Creator.reducer(false, {
    [actionTypes.BACKUP_SAVE]: (state, action) => true,
    [actionTypes.BACKUP_SAVE_SUCCESS]: (state, action) => false,
});

export default combineReducers({
    isBackupSaving: backupStatusReducer,
});
