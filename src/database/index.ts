import { cryptoConfig } from './config';

import { default as RealmDB } from './Realm';

// Realm.deleteFile({
//     path: Realm.defaultPath
// });

const CryptoDB = new RealmDB<Crypto>(cryptoConfig, 'Crypro');

export type RealmDBType = typeof CryptoDB;

export { CryptoDB };
