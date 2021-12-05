import React, { useMemo } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { SATOSHI_IN_BTC } from 'appConstants';

import styles from './styles';
import { CryptoCurrency } from 'database/schema/crypto/types';

interface CryptoWalletScreenPropTypes {
    cryptoCurrency: (CryptoCurrency & Realm.Object) | null | undefined,

    onCreateWalletPress: () => void,
    onCopyPublicAddressPress: () => void,
}

function CryptoWalletScreen({
    cryptoCurrency,
    onCreateWalletPress,
    onCopyPublicAddressPress,
}: CryptoWalletScreenPropTypes) {
    const createWalletButton = useMemo(() => (
        <TouchableOpacity
            style={styles.button}
            onPress={onCreateWalletPress}
        >
            <Text style={styles.buttonText}>Create Wallet</Text>
        </TouchableOpacity>),
    [ onCreateWalletPress ]);

    return (
        <SafeAreaView style={styles.screen}>
            { cryptoCurrency?.publicAddress ? (
                <View style={styles.content}>
                    <View style={styles.balanceContainer}>
                        <Text
                            style={styles.balanceTitle}
                        >Your balance is</Text>
                        <Text
                            style={styles.balance}
                        >{cryptoCurrency.balance / SATOSHI_IN_BTC} {cryptoCurrency.name}</Text>
                    </View>

                    <View style={styles.publicAddressContainer}>
                        <Text style={styles.publicAddressTitle}>Public Address:</Text>
                        <Text style={styles.publicAddress}>{cryptoCurrency.publicAddress}</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={onCopyPublicAddressPress}
                        >
                            <Text style={styles.buttonText}>Copy Public Address</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Text >Unconfirmed Balance: {cryptoCurrency.unconfirmedBalance / SATOSHI_IN_BTC}</Text> */}
                </View>
                ) : (
                    createWalletButton
                )}
        </SafeAreaView>
    );
}

export default React.memo(CryptoWalletScreen);
