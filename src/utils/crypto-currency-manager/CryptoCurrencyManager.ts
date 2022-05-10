import {
    createTransaction,
    processCryptoInfoResponse,
} from './methods';

class CryptoCurrencyManager {
    static createTransaction = createTransaction;
    static processCryptoInfoResponse = processCryptoInfoResponse;
}

export default CryptoCurrencyManager;
