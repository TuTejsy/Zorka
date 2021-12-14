import {
    convertTransactionToDB,
    fetchAddressInfoForCrypto
} from './methods';

class CryptoCurrencyManager {
    static convertTransactionToDB = convertTransactionToDB;
    static fetchAddressInfoForCrypto = fetchAddressInfoForCrypto;
}

export default CryptoCurrencyManager;
