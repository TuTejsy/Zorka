import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { SATOSHI_IN_BTC } from 'appConstants';
import { LoadingCircle } from 'appComponents/core';

import styles from './styles';

interface CryptoWalletScreenPropTypes {
    cryptoCurrency: (CryptoCurrency & Realm.Object) | null | undefined,

    onCreateWalletPress: () => void,
}

function CryptoWalletScreen({
    cryptoCurrency,
    onCreateWalletPress,
}: CryptoWalletScreenPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>
            { cryptoCurrency?.publicAddress ? (
                <View>
                    <Text >Public Address: </Text>
                    <Text selectable>{cryptoCurrency.publicAddress}</Text>
                    <Text >Balance: {cryptoCurrency.balance / SATOSHI_IN_BTC}</Text>
                    <Text >Unconfirmed Balance: {cryptoCurrency.unconfirmedBalance / SATOSHI_IN_BTC}</Text>
                </View>
                ) : (
                    <TouchableOpacity
                        style={styles.createWalletButton}
                        onPress={onCreateWalletPress}
                    >
                        <Text style={styles.createWalletText}>Создать кошелек</Text>
                    </TouchableOpacity>
                )}
        </SafeAreaView>
    );
}

export default React.memo(CryptoWalletScreen);
