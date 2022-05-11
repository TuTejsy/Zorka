import React, { useCallback } from 'react';
import { View, SafeAreaView, FlatList, RefreshControl } from 'react-native';

import { CURRENCY } from 'appConstants';
import { colors } from 'appAssets/styles';

import { CryptoCurrencyPreview } from './components';
import styles from './styles';

interface CryptoListScreenPropTypes {
    isRefreshing: boolean,
    cryptoCurrencies: Realm.Results<CryptoCurrency & Realm.Object>
    cryptoCurrenciesVersion: number,

    onRefresh: () => void,
    onCryptoCurrencyPress: (cryptoCurrencyId: CurrencyId) => void,
}

function CryptoListScreen({
    isRefreshing,
    cryptoCurrencies,
    cryptoCurrenciesVersion,

    onRefresh,
    onCryptoCurrencyPress,
}: CryptoListScreenPropTypes) {
    const createOnCurrencyPress = useCallback(
        (cryptoId: CurrencyId) => () => onCryptoCurrencyPress(cryptoId),
        [ onCryptoCurrencyPress ],
    );

    const renderItem = useCallback(({ item }: {item: CryptoCurrency }) => (
        <CryptoCurrencyPreview
            id={item.id}
            name={item.name}
            price={item.lastPrice}
            amount={item.balance / CURRENCY.SATOSHI_AMOUNT[item.id]}
            logoURL={item.logoUrl}
            onPress={createOnCurrencyPress(item.id)}
            prevPrice={item.prevPrice}
        />
    ), [ createOnCurrencyPress ]);

    const renderSeparator = useCallback(({ item }: {item: Transaction }) => (
        <View style={styles.separator} />
    ), []);


    const keyExtractor = useCallback((item: CryptoCurrency & Realm.Object, index: number) => (
        item.id
    ), []);

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={cryptoCurrencies}
                style={styles.flatList}

                extraData={cryptoCurrenciesVersion}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                refreshControl={(
                    <RefreshControl
                        onRefresh={onRefresh}
                        tintColor={colors.GHOST_WHITE}
                        refreshing={isRefreshing}
                    />
                )}
                ItemSeparatorComponent={renderSeparator}
            />
        </SafeAreaView>
    );
}

export default React.memo(CryptoListScreen);
