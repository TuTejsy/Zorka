
type CurrencyId = 'BTC' | 'ETH' | 'XRP' | 'ADA' | 'LTC' | 'DASH' | 'BCH';

interface CryptoCurrency {
    id: CurrencyId,
    name: string,
    balance: number,
    prevPrice: number,
    lastPrice: number,
    totalPrice: number,
    unconfirmedBalance: number,

    lowFee: number,
    highFee: number,
    mediumFee: number,

    logoUrl?: string,
    privateWif?: string,
    privateKey?: string,
    publicAddress?: string,
}

interface TransactionInput {
    script: string,
    prevHash: string,
    addresses: Array<string>
    outputValue: number,
    outputIndex: number,
}

interface TransactionOutput {
    value: number,
    script: string,
    addresses: Array<string>

    spentBy?: string,
}

interface Transaction {
    hash: string,
    fees: number,
    value: number,
    total: number,
    sender: string,
    inputs: Realm.List<TransactionInput>,
    reciver: string,
    outputs: Realm.List<TransactionOutput>,
    addresses: Array<string>,
    timestamp: number,
    isIncoming: boolean,
    doubleSpend: boolean,
    isConfirmed: boolean,
    confirmations: number,
    walletAddress: string,

    preference?: Preference,
    blockHeight?: number,
}
