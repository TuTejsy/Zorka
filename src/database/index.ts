import { cryptoConfig, transactionsConfig } from './config';

import { default as RealmDB } from './Realm';

// Realm.deleteFile({
//     path: Realm.defaultPath
// });
transactionsConfig;
const CryptoDB = new RealmDB<CryptoCurrency>(cryptoConfig, 'Crypto');
const TransactionsDB = new RealmDB<Transaction>(transactionsConfig, 'Transaction');

export type RealmDBType = typeof CryptoDB;

export {
    CryptoDB,
    TransactionsDB,
};
