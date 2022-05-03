import authTypes from './action-types';

const CreateZorkaWallet = (payload: CreateZorkaWalletPayload) => ({
    type: authTypes.CREATE_ZORKA_WALLET,
    payload,
});

const saveBackup = () => ({
    type: authTypes.SAVE_BACKUP,
    payload: undefined,
});

const logout = () => ({
    type: authTypes.LOGOUT,
    payload: undefined,
});

export default {
    logout,
    saveBackup,
    CreateZorkaWallet,
};
