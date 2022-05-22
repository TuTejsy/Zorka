import { Networks, PrivateKey, Transaction } from 'bitcore-lib';
import { CryptoDB, TransactionsDB } from 'appDatabase';

import { CURRENCY } from 'appConstants';

interface CreateTransactionPropTypes {
    fee: number,
    outputAddress: string,
    cryptoWalletId: string,
    valueInSatoshi: number,
}

async function createTransaction({
    fee,
    outputAddress,
    valueInSatoshi,
    cryptoWalletId = CURRENCY.ID.BTC
}: CreateTransactionPropTypes) {
    const cryptoWallet = CryptoDB.object(cryptoWalletId);

    if (!cryptoWallet || !cryptoWallet.publicAddress) {
        throw 'createTransaction: cryptoWallet.address is null';
    }

    const privateKey = new PrivateKey(cryptoWallet.privateKey, Networks.testnet);
    const publicAddress = cryptoWallet.publicAddress;

    const transactions = TransactionsDB
        .objects()
        .filtered(`walletAddress = "${publicAddress}" && isConfirmed = true && outputs.spentBy = nil && ANY outputs.addresses = "${publicAddress}"`)
        .sorted('timestamp', true);

    const UnspentOutputs: Array<Transaction.UnspentOutput> = [];

    transactions.forEach((transaction) => {
        transaction.outputs.forEach((output) => {
            const clonnedOutput = output.cloneZRK<TransactionOutput>();

            if (!clonnedOutput.addresses.includes(publicAddress) || !!clonnedOutput.spentBy) {
                return;
            }

            const UTXO = new Transaction.UnspentOutput({
                txId: transaction.hash,
                script: clonnedOutput.script,
                satoshis: clonnedOutput.value,
                outputIndex: transaction.outputs.findIndex(output => (
                    output.script === clonnedOutput.script)
                ),
                outputAddress: clonnedOutput.addresses[0],
            });

            UnspentOutputs.push(UTXO);
        });
    });

    const newTransactions = new Transaction()
        .from(UnspentOutputs)
        .to(outputAddress, valueInSatoshi)
        .change(publicAddress)
        .fee(fee)
        .sign(privateKey)
        .serialize();

    return newTransactions;
}

export default createTransaction;
