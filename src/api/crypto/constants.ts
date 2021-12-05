export const NOMIX_API_KEY = '0af3d84236d9261137d40563f34ae82876a44270';
export const BLOCKCYPER_API_KEY = '7f78d9dcd0dc49a8951c829352727754';

export const SATOSHI_IN_BTC = 100000000;

export const CURRENCY = {
    ID: {
        BTC: 'BTC',
        ETH: 'ETH',
        XRP: 'XRP',
        ADA: 'ADA',
    }
};


export type CurrencyId = keyof typeof CURRENCY.ID;
