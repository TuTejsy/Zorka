import React, { useCallback } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import { TransactionPreview } from './components';

import styles from './styles';

interface TransactionsListScreenPropTypes {
    currencyId: CurrencyId,
    currencyName: string,
    transactions: Realm.Results<Transaction & Realm.Object>
    transactionsVersion: number,
}

function TransactionsListScreen({
    currencyId,
    currencyName,
    transactions,
    transactionsVersion,
}: TransactionsListScreenPropTypes) {
    const renderItem = useCallback(({ item }: {item: Transaction }) => (
        <TransactionPreview
            currencyId={currencyId}
            transaction={item}
            currencyName={currencyName}
        />
    ), [currencyId, currencyName]);

    const renderSeparator = useCallback(({ item }: {item: Transaction }) => (
        <View style={styles.separator} />
    ), []);

    const keyExtractor = useCallback((item: Transaction & Realm.Object, index: number) => (
        item.hash
    ), []);

    return (
        <SafeAreaView style={styles.screen}>
            { global.isIos && (
                <View style={styles.swipeIndicator} />
            )}

            <FlatList
                data={transactions}
                style={styles.flatList}
                extraData={transactionsVersion}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.flatListContentStyle}
                ItemSeparatorComponent={renderSeparator}
            />
        </SafeAreaView>
    );
}

export default React.memo(TransactionsListScreen);
