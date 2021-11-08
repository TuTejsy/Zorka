import { Configuration } from 'realm';

import { CryptoSchema } from '../schema';

const cryptoConfig: Configuration = {
    schemaVersion: 4,
    deleteCache: () => {},
    migration: (oldRealm, newRealm) => {
        // TODO: for now we just drop database --> then we have to apply migrations
        newRealm.deleteAll();
    },
    schema: [
        CryptoSchema
    ],
};

export default cryptoConfig;
