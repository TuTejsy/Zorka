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
        prevPrice: {
            type: 'double',
            default: 0,
        },
        lastPrice: {
            type: 'double',
            default: 0,
        },
        totalPrice: {
            type: 'double',
            default: 0,
        },

        logoUrl: 'string?',
        privateWif: 'string?',
        privateKey: 'string?',
        publicAddress: 'string?',

        lowFee: {
            type: 'int',
            default: 0,
        },
        mediumFee: {
            type: 'int',
            default: 0,
        },
        highFee: {
            type: 'int',
            default: 0,
        },
    },
};

export default CryptoSchema;
