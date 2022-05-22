import { CryptoDB, TransactionsDB } from 'appDatabase';
import { convertTransactionToDB, convertTXRefToTransaction } from './helpers';

async function processCryptoInfoResponse(response: Address, cryptoId: string) {
    const crypto = CryptoDB.object(cryptoId);

    if (!crypto || !crypto.publicAddress) {
        throw 'Crypto doesn\'t exist';
    }

    const publicAddress = crypto.publicAddress;
    const cryptoBalance: number = response.balance;
    const unconfirmedBalance: number = response.unconfirmed_balance;

    CryptoDB.modify(() => {
        crypto.balance = cryptoBalance;
        crypto.unconfirmedBalance = unconfirmedBalance;
    });

    const transactionsToUpsert: Array<Transaction> = [];

    response.txs?.forEach((confirmedTransaction) => {
        const transaction = convertTransactionToDB(
            confirmedTransaction,
            publicAddress
        );

        transactionsToUpsert.push(transaction);
    });

    response.unconfirmed_txrefs?.forEach((unconfirmedTransaction) => {
        const transaction = convertTXRefToTransaction(
            unconfirmedTransaction,
            publicAddress
        );

        transactionsToUpsert.push(transaction);
    });

    await TransactionsDB.upsert(transactionsToUpsert);
}

export default processCryptoInfoResponse;
