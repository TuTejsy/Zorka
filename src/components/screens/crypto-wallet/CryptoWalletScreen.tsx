import React, { useMemo } from 'react';
import { Text, View, RefreshControl, ScrollView, TouchableOpacity } from 'react-native';

import { colors } from 'appAssets/styles';
import { CURRENCY } from 'appConstants';

import styles from './styles';

interface CryptoWalletScreenPropTypes {
    isRefreshing: boolean,
    cryptoCurrency: (CryptoCurrency & Realm.Object) | null | undefined,

    onRefresh: () => void,
    onSendCryptoPress: () => void,
    onViewHistoryPress: () => void,
    onCreateZorkaWalletPress: () => void,
    onCopyPublicAddressPress: () => void,
}

function CryptoWalletScreen({
    isRefreshing,
    cryptoCurrency,

    onRefresh,
    onSendCryptoPress,
    onViewHistoryPress,
    onCreateZorkaWalletPress,
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
                        >{cryptoCurrency.balance / CURRENCY.SATOSHI_AMOUNT[cryptoCurrency.id]} {cryptoCurrency.name}
                        </Text>
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
                    <View style={styles.CreateZorkaWalletContainer}>
                        <Text style={styles.CreateZorkaWalletText}>Create Your {cryptoCurrency?.name} Wallet</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onCreateZorkaWalletPress}
                        >
                            <Text style={styles.buttonText}>Create Wallet</Text>
                        </TouchableOpacity>
                    </View>
                )}
        </ScrollView>
    );
}

export default React.memo(CryptoWalletScreen);
