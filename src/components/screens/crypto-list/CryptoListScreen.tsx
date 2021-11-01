import React, { useCallback } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { LoadingCircle } from 'appComponents/core';

import { CryptoCurrencyPreview } from './components';

import styles from './styles';

interface CryptoListScreenPropTypes {
    cryptoCurrencies: Realm.Results<CryptoCurrency & Realm.Object>
    cryptoCurrenciesVersion: number
}

function CryptoListScreen({
    cryptoCurrencies,
    cryptoCurrenciesVersion,
}: CryptoListScreenPropTypes) {
    const renderItem = useCallback(({ item }: {item: CryptoCurrency }) => (
        <CryptoCurrencyPreview
            name={item.id}
            price={item.lastPrice}
            logoURL={item.logoUrl}
        />
    ), []);

    const keyExtractor = useCallback((item: CryptoCurrency & Realm.Object, index: number) => (
        item.id
    ), []);

    return (
        <SafeAreaView >
            <FlatList
                data={cryptoCurrencies}
                style={styles.flatList}
                extraData={cryptoCurrenciesVersion}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    );
}

export default React.memo(CryptoListScreen);
