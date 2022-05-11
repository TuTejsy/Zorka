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

    const sender = isIncoming ? (
        transaction.inputs
            .filter(input => !input.addresses.includes(walletAddress))
            .map(input => input.addresses.filter(address => address !== walletAddress)[0])[0]
    ) : walletAddress;

    const reciver = !isIncoming ? (
        transaction.outputs
            .filter(output => (!output.addresses.includes(walletAddress) && output.value !== value))
            .map(output => output.addresses.filter(address => address !== walletAddress)[0])[0]
    ) : walletAddress;

    return {
        hash: transaction.hash,
        fees: transaction.fees,
        value,
        total: transaction.total,
        sender,
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
        reciver,
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
