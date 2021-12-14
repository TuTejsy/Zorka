import { Transaction } from 'ethers';
import { Configuration } from 'realm';

import { TransactionSchema } from '../schema';

const transactionsConfig: Configuration = {
    schemaVersion: 1,
    deleteCache: () => {},
    migration: (oldRealm, newRealm) => {
    },
    schema: [
        TransactionSchema
    ],
};

export default transactionsConfig;
