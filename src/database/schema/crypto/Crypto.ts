import { ObjectSchema } from 'realm';

const CryptoSchema: ObjectSchema = {
    name: 'Crypto',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        balance: {
            type: 'int',
            default: 0,
        },
        unconfirmedBalance: {
            type: 'int',
            default: 0,
        },
        lastPrice: 'string',

        logoUrl: 'string?',
        privateWif: 'string?',
        privateKey: 'string?',
        publicAddress: 'string?',
    },
};

export default CryptoSchema;
