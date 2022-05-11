import { Configuration } from 'realm';

import { CryptoSchema } from '../schema';

const cryptoConfig: Configuration = {
    schemaVersion: 8,
    deleteCache: () => {},
    deleteRealmIfMigrationNeeded: true,
    // migration: (oldRealm, newRealm) => {
    // },
    schema: [
        CryptoSchema
    ],
};

export default cryptoConfig;
