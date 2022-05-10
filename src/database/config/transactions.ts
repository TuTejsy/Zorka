import { Configuration } from 'realm';

import {
    TransactionSchema,
    TransactionInputSchema,
    TransactionOutputSchema,
} from '../schema';

const transactionsConfig: Configuration = {
    schemaVersion: 10,
    deleteCache: () => {},
    migration: (oldRealm, newRealm) => {
    },
    schema: [
        TransactionSchema,
        TransactionInputSchema,
        TransactionOutputSchema,
    ],
};

export default transactionsConfig;
