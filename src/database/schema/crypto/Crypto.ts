import { ObjectSchema } from 'realm';

const CryptoSchema: ObjectSchema = {
    name: 'Crypto',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        lastPrice: 'string',

        logoUrl: 'string?',
    },
};

export default CryptoSchema;
