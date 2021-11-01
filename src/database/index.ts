import { cryptoConfig } from './config';

import { default as RealmDB } from './Realm';

// Realm.deleteFile({
//     path: Realm.defaultPath
// });

const CryptoDB = new RealmDB<CryptoCurrency>(cryptoConfig, 'Crypto');

export type RealmDBType = typeof CryptoDB;

export { CryptoDB };
