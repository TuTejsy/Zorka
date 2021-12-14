import { Transaction } from 'database/types';

function convertTransactionToDB(transaction: TransactionResoponse, walletAddress: string): Transaction {
    const transactionDate = new Date(transaction.confirmed || transaction.received || '');

    return {
        hash: transaction.tx_hash,
        value: transaction.value,
        timestamp: transactionDate.getTime(),
        isIncoming: !transaction.spent,
        preference: transaction.preference,
        doubleSpend: transaction.double_spend,
        blockHeight: transaction.block_height,
        totalBalance: transaction.ref_balance,
        confirmations: transaction.confirmations,
        walletAddress,
    };
}

export default convertTransactionToDB;
