import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

import { CURRENCY } from 'appConstants';

import styles, { useContextualStyles } from './styles';

interface TransactionPreviewPropTypes {
    currencyId: CurrencyId,
    transaction: Transaction,
    currencyName: string,
}

function TransactionPreview({
    currencyId,
    transaction,
    currencyName,
}: TransactionPreviewPropTypes) {
    const contextualStyles = useContextualStyles({
        isIncoming: transaction.isIncoming,
        isConfirmed: transaction.isConfirmed,
    });

    const [transactionDate, transactionTime] = useMemo(() => {
        const date = moment(transaction.timestamp);

        return [date.format('ll'), date.format('LTS')];
    }, [ transaction.timestamp ]);

    const transactionAmount = useMemo(() => (
        `${transaction.value / CURRENCY.SATOSHI_AMOUNT[currencyId]} ${currencyName}`
    ), [currencyId, currencyName, transaction.value]);

    return (
        <View
            style={contextualStyles.preview}
        >
            <View style={contextualStyles.incomingIndicator} />

            <View style={styles.amountContainer}>
                <Text style={styles.amountText}> { transactionAmount }</Text>
                { !transaction.isConfirmed && (
                    <Text style={styles.confirmations}> ({transaction.confirmations} confirmations)</Text>
                )
                }
            </View>


            <View style={styles.date}>
                <Text style={styles.dateText}>{transactionTime}</Text>
                <Text style={styles.dateText}>{transactionDate}</Text>
            </View>
        </View>
    );
}

export default React.memo(TransactionPreview);
