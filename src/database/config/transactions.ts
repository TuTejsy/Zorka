import { Configuration } from 'realm';

import {
    TransactionSchema,
    TransactionInputSchema,
    TransactionOutputSchema,
} from '../schema';

const transactionsConfig: Configuration = {
    schemaVersion: 12,
    deleteCache: () => {},
    deleteRealmIfMigrationNeeded: true,
    // migration: (oldRealm, newRealm) => {
    // },
    schema: [
        TransactionSchema,
        TransactionInputSchema,
        TransactionOutputSchema,
    ],
};

export default transactionsConfig;
