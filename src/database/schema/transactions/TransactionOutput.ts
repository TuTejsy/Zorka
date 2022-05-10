import { ObjectSchema } from 'realm';

const TransactionOutputSchema: ObjectSchema = {
    name: 'TransactionOutput',
    properties: {
        value: 'int',
        script: 'string',
        addresses: 'string[]',

        spentBy: 'string?',
    },
};

export default TransactionOutputSchema;
