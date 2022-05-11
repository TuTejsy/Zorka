import React, { useCallback } from 'react';
import { View, SafeAreaView, FlatList, RefreshControl } from 'react-native';

import { colors } from 'appAssets/styles';

import { TransactionPreview } from './components';

import styles from './styles';

interface TransactionsListScreenPropTypes {
    currencyId: CurrencyId,
    currencyName: string,
    transactions: Realm.Results<Transaction & Realm.Object>
    transactionsVersion: number,

    onRefresh: () => void,
    isRefreshing: boolean,
}

function TransactionsListScreen({
    currencyId,
    currencyName,
    transactions,
    transactionsVersion,

    onRefresh,
    isRefreshing,
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
                refreshControl={(
                    <RefreshControl
                        onRefresh={onRefresh}
                        tintColor={colors.GHOST_WHITE}
                        refreshing={isRefreshing}
                    />
                )}
                contentContainerStyle={styles.flatListContentStyle}
                ItemSeparatorComponent={renderSeparator}
            />
        </SafeAreaView>
    );
}

export default React.memo(TransactionsListScreen);
