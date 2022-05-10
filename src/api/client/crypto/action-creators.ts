import cryptoTypes from './action-types';

const createCryptoWallet = () => ({
    type: cryptoTypes.CREATE_CRYPTO_WALLET,
});


const updateCryptoList = () => ({
    type: cryptoTypes.UPDATE_CRYPTO_LIST,
});
const updateCryptoWalletBalance = (payload: UpdateCryptBalancePayload) => ({
    type: cryptoTypes.UPDATE_CRYPTO_WALLET_INFO,
    payload,
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
};
