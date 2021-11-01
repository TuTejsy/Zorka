declare module 'realm' {
    interface Configuration {
        deleteCache: (dbInstance: Realm) => void;
    }
}

interface CryptoCurrency {
    id: string,
    name: string,
    lastPrice: string,

    logoUrl?: string,
}
