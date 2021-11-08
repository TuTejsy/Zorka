import authTypes from './action-types';

const createWallet = (payload: CreateWalletPayload) => ({
    type: authTypes.CREATE_CRYPTO_WALLET,
    payload,
});

export default {
    createWallet,
};
