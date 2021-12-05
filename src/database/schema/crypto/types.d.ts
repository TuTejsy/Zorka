import { CurrencyId } from 'appConstants';

interface CryptoCurrency {
    id: CurrencyId,
    name: string,
    balance: number,
    lastPrice: string,
    unconfirmedBalance: number,

    logoUrl?: string,
    publicKey?: string,
    privateWif?: string,
    privateKey?: string,
    publicAddress?: string,
}
