import React, { useMemo } from 'react';
import { Text, View, RefreshControl, ScrollView, TouchableOpacity } from 'react-native';

import { colors } from 'appAssets/styles';
import { SATOSHI_IN_BTC } from 'appConstants';

import styles from './styles';
import { CryptoCurrency } from 'database/types';

interface CryptoWalletScreenPropTypes {
    isRefreshing: boolean,
    cryptoCurrency: (CryptoCurrency & Realm.Object) | null | undefined,

    onRefresh: () => void,
    onSendCryptoPress: () => void,
    onViewHistoryPress: () => void,
    onCreateWalletPress: () => void,
    onCopyPublicAddressPress: () => void,
}

function CryptoWalletScreen({
    isRefreshing,
    cryptoCurrency,

    onRefresh,
    onSendCryptoPress,
    onViewHistoryPress,
    onCreateWalletPress,
    onCopyPublicAddressPress,
}: CryptoWalletScreenPropTypes) {
    return (
        <ScrollView
            style={styles.scrollView}
            refreshControl={(
                <RefreshControl
                    onRefresh={onRefresh}
                    tintColor={colors.GHOST_WHITE}
                    refreshing={isRefreshing}
                />
            )}
            contentContainerStyle={styles.screen}
        >
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

                    <View style={styles.transactionsContainer}>
                        <TouchableOpacity
                            style={styles.transactionsButton}
                            onPress={onViewHistoryPress}
                        >
                            <Text style={styles.transactionsText}>View History</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.sendButton}
                            onPress={onSendCryptoPress}
                        >
                            <Text style={styles.transactionsText}>Send Crypto</Text>
                        </TouchableOpacity>
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
                    <View style={styles.createWalletContainer}>
                        <Text style={styles.createWalletText}>Create Your {cryptoCurrency?.name} Wallet</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onCreateWalletPress}
                        >
                            <Text style={styles.buttonText}>Create Wallet</Text>
                        </TouchableOpacity>
                    </View>
                )}
        </ScrollView>
    );
}

export default React.memo(CryptoWalletScreen);
