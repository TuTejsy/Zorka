import React, { useCallback } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import { CurrencyId } from 'appConstants';

import { CryptoCurrencyPreview } from './components';
import { CryptoCurrency } from 'database/types';

import styles from './styles';

interface CryptoListScreenPropTypes {
    cryptoCurrencies: Realm.Results<CryptoCurrency & Realm.Object>
    cryptoCurrenciesVersion: number,

    onCryptoCurrencyPress: (cryptoCurrencyId: CurrencyId) => void,
}

function CryptoListScreen({
    cryptoCurrencies,
    cryptoCurrenciesVersion,

    onCryptoCurrencyPress,
}: CryptoListScreenPropTypes) {
    const createOnCurrencyPress = useCallback(
        (cryptoId: CurrencyId) => () => onCryptoCurrencyPress(cryptoId),
        [ onCryptoCurrencyPress ],
    );

    const renderItem = useCallback(({ item }: {item: CryptoCurrency }) => (
        <CryptoCurrencyPreview
            name={item.id}
            price={item.lastPrice}
            logoURL={item.logoUrl}
            onPress={createOnCurrencyPress(item.id)}
        />
    ), [ createOnCurrencyPress ]);

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
            />
        </SafeAreaView>
    );
}

export default React.memo(CryptoListScreen);
