
interface CreateCryptoWalletPayload {
    cryptoId: CurrencyId,
}


interface UpdateCryptoBalancePayload {
    cryptoId: CurrencyId;
    shouldUpdateCryptoList?: boolean,
}

interface CryptoBalanceUpdatedPayload {
    cryptoId: CurrencyId;
}

interface CreateTransactionPayload {
    fee: number,
    reciverAddress: string,
    valueInSatoshi: number,
}
