
interface UpdateCryptBalancePayload {
    cryptoId: CurrencyId;
}

interface CreateTransactionPayload {
    fee: number,
    reciverAddress: string,
    valueInSatoshi: number,
}
