import authTypes from './action-types';

const createZorkaWallet = (payload: CreateZorkaWalletPayload) => ({
    type: authTypes.CREATE_ZORKA_WALLET,
    payload,
});

const enterSecretPhrase = (payload: EnterSecretPhrasePayload) => ({
    type: authTypes.ENTER_SECRET_PHRASE,
    payload,
});

const saveBackup = () => ({
    type: authTypes.BACKUP_SAVE,
    payload: undefined,
});

const logout = () => ({
    type: authTypes.LOGOUT,
    payload: undefined,
});

export default {
    logout,
    saveBackup,
    enterSecretPhrase,
    createZorkaWallet,
};
