import { Configuration } from 'realm';

import {} from '../schema';

const cryptoConfig: Configuration = {
    schemaVersion: 3,
    deleteCache: () => {},
    migration: (oldRealm, newRealm) => {
        // TODO: for now we just drop database --> then we have to apply migrations
        newRealm.deleteAll();
    },
    schema: [],
};

export default cryptoConfig;
