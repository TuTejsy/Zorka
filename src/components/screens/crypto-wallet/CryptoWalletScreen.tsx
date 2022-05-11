import React, { useMemo } from 'react';
import { Text, Image, View, RefreshControl, ScrollView, TouchableOpacity, Button } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { colors } from 'appAssets/styles';
import { CURRENCY } from 'appConstants';

import styles from './styles';

interface CryptoWalletScreenPropTypes {
    price: string,
    isRefreshing: boolean,
    cryptoCurrency: (CryptoCurrency & Realm.Object) | null | undefined,

    onRefresh: () => void,
    onSendCryptoPress: () => void,
    onViewHistoryPress: () => void,
    onCreateZorkaWalletPress: () => void,
    onCopyPublicAddressPress: () => void,
}

function CryptoWalletScreen({
    price,
    isRefreshing,
    cryptoCurrency,

    onRefresh,
    onSendCryptoPress,
    onViewHistoryPress,
    onCreateZorkaWalletPress,
    onCopyPublicAddressPress,
}: CryptoWalletScreenPropTypes) {
    const logoURL = cryptoCurrency?.logoUrl;

    const extention = useMemo(() => logoURL?.split('.').pop(), [ logoURL ]);
    const isSVG = extention === 'svg';
    const isWalletExists = !!cryptoCurrency?.publicAddress;

    const balance = useMemo(
        () => {
            if (cryptoCurrency) {
                return cryptoCurrency.balance / CURRENCY.SATOSHI_AMOUNT[cryptoCurrency.id];
            }

            return 0;
        },
        [ cryptoCurrency ]
    );

    const balancePriceLabel = useMemo(
        () => {
            const totalPrice = balance * Number(price);
            return `$${Math.round(Number(totalPrice) * 1000) / 1000}`;
        },
        [balance, price]
    );

    return (
        <ScrollView
            style={styles.scrollView}
            scrollEnabled={isWalletExists}
            refreshControl={isWalletExists ? (
                <RefreshControl
                    onRefresh={onRefresh}
                    tintColor={colors.GHOST_WHITE}
                    refreshing={isRefreshing}
                />
            ) : undefined}
            contentContainerStyle={styles.screen}
        >
            { logoURL && (
                <View
                    style={styles.logo}
                >
                    { isSVG ? (
                                <SvgUri
                                    uri={logoURL}
                                    width="100%"
                                    style={styles.logo}
                                    height="100%"
                                />
                                    ) : (
                                        <Image
                                            style={styles.logo}
                                            source={{ uri: logoURL }}
                                            resizeMode="cover"
                                        />
                                    )}
                </View>
            )}

            { isWalletExists ? (
                <View style={styles.content}>
                    <View style={styles.balanceContainer}>
                        <Text
                            style={styles.balanceTitle}
                        >Your balance is</Text>
                        <Text
                            style={styles.balance}
                        >{ balance } { cryptoCurrency.id }
                        </Text>
                        <Text
                            style={styles.balancePrice}
                        >{ balancePriceLabel }
                        </Text>
                    </View>

                    <View style={styles.publicAddressContainer}>
                        <Text style={styles.publicAddressTitle}>Public Address:</Text>
                        <Button
                            color={colors.YELLOW}
                            title={cryptoCurrency.publicAddress ?? ''}
                            onPress={onCopyPublicAddressPress}
                        />
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
                </View>
                ) : (
                    <View style={styles.createZorkaWalletContainer}>
                        <Text style={styles.createZorkaWalletText}>Create Your {cryptoCurrency?.name} Wallet</Text>
                        <TouchableOpacity
                            style={styles.createWalletButton}
                            onPress={onCreateZorkaWalletPress}
                        >
                            <Text style={styles.createWalletText}>Create Wallet</Text>
                        </TouchableOpacity>
                    </View>
                )}
        </ScrollView>
    );
}

export default React.memo(CryptoWalletScreen);
