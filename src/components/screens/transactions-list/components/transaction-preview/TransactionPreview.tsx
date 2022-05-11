import React, { useMemo } from 'react';
import { Text, View, NativeSyntheticEvent } from 'react-native';
import ContextMenu, { ContextMenuOnPressNativeEvent } from 'react-native-context-menu-view';
import moment from 'moment';

import { CURRENCY } from 'appConstants';
import { colors } from 'appAssets/styles';

import styles, { useContextualStyles } from './styles';

interface TransactionPreviewPropTypes {
    currencyId: CurrencyId,
    transaction: Transaction,
    currencyName: string,
    transactionIndex: number,

    onOptionSelect: (
        e: NativeSyntheticEvent<ContextMenuOnPressNativeEvent>
    ) => void,
}

function TransactionPreview({
    currencyId,
    transaction,
    currencyName,

    onOptionSelect,
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
        `${transaction.value / CURRENCY.SATOSHI_AMOUNT[currencyId]} ${currencyId}`
    ), [currencyId, transaction.value]);

    const transactionAddressLabel = useMemo(() => {
        if (transaction.isIncoming) {
            return transaction.sender;
        } else {
            return transaction.reciver;
        }
    }, [transaction.isIncoming, transaction.reciver, transaction.sender]);

    return (
        <ContextMenu
            actions={[ { title: `Copy ${transaction.isIncoming ? 'Sender' : 'Reciver'} Address` } ]}
            onPress={onOptionSelect}
        >
            <View
                style={contextualStyles.preview}
            >
                <View style={contextualStyles.incomingIndicator} />

                <View style={styles.transactionValueContainer}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amountText}> { transactionAmount }</Text>
                        { !transaction.isConfirmed && (
                            <Text style={styles.confirmations}> ({transaction.confirmations} confirmations)</Text>
                        )}
                    </View>

                    <Text
                        style={styles.transactionAddress}
                        numberOfLines={1}
                        ellipsizeMode="middle"
                    >{ transactionAddressLabel }</Text>
                </View>

                <View style={styles.date}>
                    <Text style={styles.dateText}>{transactionTime}</Text>
                    <Text style={styles.dateText}>{transactionDate}</Text>
                </View>
            </View>
        </ContextMenu>
    );
}

export default React.memo(TransactionPreview);
