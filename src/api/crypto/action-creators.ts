import cryptoTypes from './action-types';
import { UpdateCryptBalancePayload } from './types';

const createCryptoWallet = () => ({
    type: cryptoTypes.CREATE_CRYPTO_WALLET,
});


const updateCryptoList = () => ({
    type: cryptoTypes.UPDATE_CRYPTO_LIST,
});
const updateCryptoBalance = (payload: UpdateCryptBalancePayload) => ({
    type: cryptoTypes.UPDATE_CRYPTO_BALANCE,
    payload,
});

export default {
    updateCryptoList,
    createCryptoWallet,
    updateCryptoBalance,
};
