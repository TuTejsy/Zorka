import authTypes from './action-types';

const createWallet = (payload: CreateWalletPayload) => ({
    type: authTypes.CREATE_CRYPTO_WALLET,
    payload,
});

const saveBackup = () => ({
    type: authTypes.SAVE_BACKUP,
    payload: undefined,
});

export default {
    saveBackup,
    createWallet,
};
