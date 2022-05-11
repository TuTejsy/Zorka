import React, { useCallback } from 'react';
import {
    View,
    FlatList,
    SafeAreaView,
    RefreshControl,
    NativeSyntheticEvent,
} from 'react-native';
import { ContextMenuOnPressNativeEvent } from 'react-native-context-menu-view';

import { colors } from 'appAssets/styles';

import { TransactionPreview } from './components';

import styles from './styles';

interface TransactionsListScreenPropTypes {
    currencyId: CurrencyId,
    currencyName: string,
    isRefreshing: boolean,
    transactions: Realm.Results<Transaction & Realm.Object>
    transactionsVersion: number,

    onRefresh: () => void,
    makeOnTransactionOptionSelect: (
        transactionIndex: number,
    ) => ( e: NativeSyntheticEvent<ContextMenuOnPressNativeEvent>) => void,
}

function TransactionsListScreen({
    currencyId,
    currencyName,
    transactions,
    isRefreshing,
    transactionsVersion,

    onRefresh,
    makeOnTransactionOptionSelect,
}: TransactionsListScreenPropTypes) {
    const renderItem = useCallback(({ item, index }: {item: Transaction, index: number }) => (
        <TransactionPreview
            currencyId={currencyId}
            transaction={item}
            currencyName={currencyName}
            onOptionSelect={makeOnTransactionOptionSelect(index)}
            transactionIndex={index}
        />
    ), [currencyId, currencyName, makeOnTransactionOptionSelect]);

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
