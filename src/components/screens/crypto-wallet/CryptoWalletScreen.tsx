import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
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
                    <Text style={styles.publicAddress}>Public Address: {cryptoCurrency.publicAddress}</Text>
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
