import { ObjectSchema } from 'realm';

const TransactionInputSchema: ObjectSchema = {
    name: 'TransactionInput',
    properties: {
        script: 'string',
        prevHash: 'string',
        addresses: 'string[]',
        outputValue: 'int',
        outputIndex: 'int',
    },
};

export default TransactionInputSchema;
