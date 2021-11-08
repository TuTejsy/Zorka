import { ObjectSchema } from 'realm';

const CryptoSchema: ObjectSchema = {
    name: 'Crypto',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        lastPrice: 'string',

        logoUrl: 'string?',
        privateWif: 'string?',
        privateKey: 'string?',
        publicAddress: 'string?',
    },
};

export default CryptoSchema;
