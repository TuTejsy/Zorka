
import { CurrencyId } from 'appConstants';
declare module 'realm' {
    interface Configuration {
        deleteCache: (dbInstance: Realm) => void;
    }
}

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

interface Transaction {
    hash: string,
    value: number,
    timestamp: number,
    isIncoming: boolean,
    doubleSpend: boolean,
    confirmations: number,
    walletAddress: string,

    preference?: 'high' | 'medium' | 'low',
    blockHeight?: number,
    totalBalance?: number,
}
