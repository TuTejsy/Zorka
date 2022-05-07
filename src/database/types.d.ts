

declare module 'realm' {
    interface Configuration {
        deleteCache: (dbInstance: Realm) => void;
    }
}

type CurrencyId = 'BTC' | 'ETH' | 'XRP' | 'ADA';

interface CryptoCurrency {
    id: CurrencyId,
    name: string,
    balance: number,
    lastPrice: string,
    unconfirmedBalance: number,

    logoUrl?: string,
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
