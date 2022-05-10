function convertTransactionToDB(transaction: TX, walletAddress: string): Transaction {
    const transactionDate = new Date(transaction.confirmed || transaction.received || '');
    const isIncoming = !transaction.inputs.some(input => input.addresses.includes(walletAddress));
    const value = isIncoming ? (
        transaction.outputs
            .filter(output => output.addresses.includes(walletAddress))
            .map(output => output.value)
            .reduce((prevValue, value) => (prevValue + value))
        ) : (
            transaction.fees + transaction.outputs
                .filter(output => !output.addresses.includes(walletAddress))
                .map(output => output.value)
                .reduce((prevValue, value) => (prevValue + value))
        );

    return {
        hash: transaction.hash,
        fees: transaction.fees,
        value,
        total: transaction.total,
        inputs: transaction.inputs.map(input => ({
            script: input.script,
            prevHash: input.prev_hash,
            addresses: input.addresses,
            outputValue: input.output_value,
            outputIndex: input.output_index,
        })),
        outputs: transaction.outputs.map(output => ({
            script: output.script,
            value: output.value,
            spentBy: output.spent_by,
            addresses: output.addresses,
        })),
        addresses: transaction.addresses,
        timestamp: transactionDate.getTime(),
        isIncoming,
        preference: transaction.preference as Preference,
        isConfirmed: !!transaction.confirmed,
        doubleSpend: transaction.double_spend,
        blockHeight: transaction.block_height,
        confirmations: transaction.confirmations,
        walletAddress,
    };
}

export default convertTransactionToDB;
