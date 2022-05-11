import cryptoTypes from './action-types';

const createCryptoWallet = (payload: CreateCryptoWalletPayload) => ({
    type: cryptoTypes.CREATE_CRYPTO_WALLET,
    payload,
});


const updateCryptoList = () => ({
    type: cryptoTypes.UPDATE_CRYPTO_LIST,
});
const updateCryptoWalletBalance = (payload: UpdateCryptoBalancePayload) => ({
    type: cryptoTypes.UPDATE_CRYPTO_WALLET_INFO,
    payload,
});
const updateAllCryptoWalletsBalance = () => ({
    type: cryptoTypes.UPDATE_ALL_CRYPTO_WALLETS_INFO,
});

const createTransaction = (payload: CreateTransactionPayload) => ({
    type: cryptoTypes.CREATE_TRANSACTION,
    payload,
});

export default {
    updateCryptoList,
    createTransaction,
    createCryptoWallet,
    updateCryptoWalletBalance,
    updateAllCryptoWalletsBalance,
};
