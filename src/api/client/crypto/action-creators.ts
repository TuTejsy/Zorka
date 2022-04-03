import cryptoTypes from './action-types';
import { UpdateCryptBalancePayload } from './types';

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

export default {
    updateCryptoList,
    createCryptoWallet,
    updateCryptoWalletBalance,
};
