import { ObjectSchema } from 'realm';

const TransactionSchema: ObjectSchema = {
    name: 'Transaction',
    primaryKey: 'hash',
    properties: {
        hash: 'string',
        value: 'int',
        timestamp: 'int',
        isIncoming: 'bool',
        doubleSpend: 'bool',
        confirmations: 'int',
        walletAddress: 'string',

        preference: 'string?',
        blockHeight: 'int?',
        totalBalance: 'int?',
    },
};

export default TransactionSchema;
