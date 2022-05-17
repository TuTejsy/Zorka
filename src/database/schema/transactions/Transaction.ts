import { ObjectSchema } from 'realm';

const TransactionSchema: ObjectSchema = {
    name: 'Transaction',
    primaryKey: 'hash',
    properties: {
        hash: 'string',
        fees: 'int',
        value: 'int',
        total: 'int',
        sender: 'string',
        inputs: 'TransactionInput[]',
        reciver: 'string',
        outputs: 'TransactionOutput[]',
        addresses: 'string[]',
        timestamp: 'int',
        isIncoming: 'bool',
        doubleSpend: 'bool',
        isConfirmed: 'bool',
        confirmations: 'int',
        walletAddress: 'string',

        preference: 'string?',
        blockHeight: 'int?',
    },
};

export default TransactionSchema;
