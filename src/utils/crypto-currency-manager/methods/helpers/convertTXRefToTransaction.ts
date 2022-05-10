function convertTXRefToTransaction(txRef: TXRef, walletAddress: string): Transaction {
    const transactionDate = new Date(txRef.confirmed || txRef.received || '');
    const isIncoming = txRef.tx_output_n !== -1;

    return {
        hash: txRef.tx_hash,
        fees: 0,
        value: txRef.value,
        total: txRef.value,
        inputs: [],
        outputs: [],
        addresses: [ txRef.address || '' ],
        timestamp: transactionDate.getTime(),
        isIncoming,
        preference: txRef.preference as Preference,
        isConfirmed: !!txRef.confirmed,
        doubleSpend: txRef.double_spend,
        blockHeight: txRef.block_height,
        confirmations: txRef.confirmations,
        walletAddress,
    };
}

export default convertTXRefToTransaction;
