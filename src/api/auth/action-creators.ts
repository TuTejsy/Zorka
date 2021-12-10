import authTypes from './action-types';

const createWallet = (payload: CreateWalletPayload) => ({
    type: authTypes.CREATE_CRYPTO_WALLET,
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
    createWallet,
};
