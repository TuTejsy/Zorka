interface CryptoCurrency {
    id: string,
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
