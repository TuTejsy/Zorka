import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

import { SATOSHI_IN_BTC } from 'appConstants';

import { Transaction } from 'database/types';

import styles, { useContextualStyles } from './styles';

interface TransactionPreviewPropTypes {
    transaction: Transaction,
}

function TransactionPreview({
    transaction
}: TransactionPreviewPropTypes) {
    const contextualStyles = useContextualStyles({ isIncoming: transaction.isIncoming });

    const [transactionDate, transactionTime] = useMemo(() => {
        const date = moment(transaction.timestamp);

        return [date.format('ll'), date.format('LTS')];
    }, [ transaction.timestamp ]);

    const transactionAmount = useMemo(() => (
        `${transaction.value / SATOSHI_IN_BTC} BTC`
    ), [ transaction.value ]);

    return (
        <View
            style={styles.preview}
        >
            <View style={contextualStyles.incomingIndicator} />

            <Text style={styles.amountText}>{transactionAmount}</Text>

            <View style={styles.date}>
                <Text style={styles.dateText}>{transactionTime}</Text>
                <Text style={styles.dateText}>{transactionDate}</Text>
            </View>
        </View>
    );
}

export default React.memo(TransactionPreview);
