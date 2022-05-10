import { Configuration } from 'realm';

import { CryptoSchema } from '../schema';

const cryptoConfig: Configuration = {
    schemaVersion: 7,
    deleteCache: () => {},
    migration: (oldRealm, newRealm) => {
        const newCryptoObjects = newRealm.objects<CryptoCurrency>(CryptoSchema.name);

        newCryptoObjects.forEach((object) => {
            // eslint-disable-next-line no-param-reassign
            object.unconfirmedBalance = 0;
        });
    },
    schema: [
        CryptoSchema
    ],
};

export default cryptoConfig;
