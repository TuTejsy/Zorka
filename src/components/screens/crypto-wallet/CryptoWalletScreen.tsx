import React, { useMemo } from 'react';
import { Text, Image, View, RefreshControl, ScrollView, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { CURRENCY, LOCALIZATION } from 'appConstants';
import { useLocalizedStrings } from 'appHooks';
import { colors } from 'appAssets/styles';

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
    const [
        balanceTitleText,
        publicAddressText,
        viewHistoryText,
        sendCryptoText,
        createWalletText,
        createYourText,
        walletText,
    ] = useLocalizedStrings([
        LOCALIZATION.CRYPTO_WALLET_SCREEN.ELEMENTS.BALANCE_TITLE,
        LOCALIZATION.CRYPTO_WALLET_SCREEN.ELEMENTS.PUBLIC_ADDRESS_TITLE,
        LOCALIZATION.CRYPTO_WALLET_SCREEN.BUTTONS.VIEW_HISTORY,
        LOCALIZATION.CRYPTO_WALLET_SCREEN.BUTTONS.SEND_CRYPTO,
        LOCALIZATION.CRYPTO_WALLET_SCREEN.BUTTONS.CREATE_WALLET,
        LOCALIZATION.CRYPTO_WALLET_SCREEN.ELEMENTS.CREATE_YOUR_TITLE,
        LOCALIZATION.CRYPTO_WALLET_SCREEN.ELEMENTS.WALLET_TITLE,
    ]);


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
        () => `$${Math.round((cryptoCurrency?.totalPrice ?? 0) * 1000) / 1000}`,
        [ cryptoCurrency ]
    );

    return (
        <ScrollView
            style={styles.scrollView}
            scrollEnabled={isWalletExists}
            contentContainerStyle={styles.screen}
            refreshControl={isWalletExists ? (
                <RefreshControl
                    onRefresh={onRefresh}
                    tintColor={colors.GHOST_WHITE}
                    refreshing={isRefreshing}
                />
            ) : undefined}
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
                        >{balanceTitleText}</Text>
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
                        <Text style={styles.publicAddressTitle}>{publicAddressText}</Text>
                        <TouchableOpacity
                            onPress={onCopyPublicAddressPress}
                        >
                            <Text style={styles.publicAddress}>
                                {cryptoCurrency.publicAddress}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.transactionsContainer}>
                        <TouchableOpacity
                            style={styles.transactionsButton}
                            onPress={onViewHistoryPress}
                        >
                            <Text style={styles.transactionsText}>{viewHistoryText}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.sendButton}
                            onPress={onSendCryptoPress}
                        >
                            <Text style={styles.transactionsText}>{sendCryptoText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                ) : (
                    <View style={styles.createZorkaWalletContainer}>
                        <Text style={styles.createZorkaWalletText}>
                            {createYourText} {cryptoCurrency?.name} {walletText}
                        </Text>
                        <TouchableOpacity
                            style={styles.createWalletButton}
                            onPress={onCreateZorkaWalletPress}
                        >
                            <Text style={styles.createWalletText}>{createWalletText}</Text>
                        </TouchableOpacity>
                    </View>
                )}
        </ScrollView>
    );
}

export default React.memo(CryptoWalletScreen);
