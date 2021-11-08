import cryptoTypes from './action-types';

const createCryptoWallet = () => ({
    type: cryptoTypes.CREATE_CRYPTO_WALLET,
});


const updateCryptoList = () => ({
    type: cryptoTypes.UPDATE_CRYPTO_LIST,
});

export default {
    updateCryptoList,
    createCryptoWallet,
};
