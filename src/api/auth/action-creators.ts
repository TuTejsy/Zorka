import authTypes from './action-types';

const createWallet = (payload: CreateWalletPayload) => ({
    type: authTypes.CREATE_WALLET,
    payload,
});

export default {
    createWallet,
};
