import React, { useMemo, useEffect, useCallback } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { Options, Navigation } from 'react-native-navigation';

import { fonts, colors } from 'appAssets/styles';
import { ToastEmitter } from 'appEmitters';
import { NAVIGATION, LOCALIZATION } from 'appConstants';
import { useAppSelector, useActions, useCryptoCurrency, useLocalizedStrings } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';
import { CryptoWalletScreen } from 'appComponents/screens';

interface CryptoWalletScreenContainerPropTypes {
    componentId: string;
    cryptoCurrencyId: CurrencyId;
}

function CryptoWalletScreenContainer({
    componentId,
    cryptoCurrencyId,
}: CryptoWalletScreenContainerPropTypes) {
    const cryptoCurrency = useCryptoCurrency(cryptoCurrencyId);
    const isCryptoWalletInfoUpdating = useAppSelector(
        state => state.crypto.isCryptoWalletInfoUpdating[cryptoCurrencyId]
    );

    const [
        copiedToastrText,
    ] = useLocalizedStrings([
        LOCALIZATION.TOASTR.COPIED,
    ]);

    const [
        showModal,
        createCryptoWallet,
        updateCryptoWalletBalance,
    ] = useActions<[
        ACTION_CREATORS_TYPES['showModal'],
        ACTION_CREATORS_TYPES['createCryptoWallet'],
        ACTION_CREATORS_TYPES['updateCryptoWalletBalance'],
    ]>([
        'showModal',
        'createCryptoWallet',
        'updateCryptoWalletBalance',
    ]);

    const price = cryptoCurrency?.lastPrice ?? 0;
    const priceLabel = useMemo(
        () => `$${Math.round(price * 1000) / 1000}`,
        [ price ]
    );

    const dispatchShowModal = useCallback(
        ({
            passProps,
            screenName,
            screenOptions,
        }: {
            passProps: any;
            screenName: string;
            screenOptions?: Options;
        }) => {
            showModal({
                passProps,
                screenName,
                screenOptions,
            });
        },
        [ showModal ],
    );

    useEffect(() => {
        updateCryptoWalletBalance({ cryptoId: cryptoCurrencyId, shouldUpdateCryptoList: true, });
    }, []);

    useEffect(() => {
        const priceDiff = (cryptoCurrency?.prevPrice ?? 0) - (cryptoCurrency?.lastPrice ?? 0);
        let rightTextColor: string;

        if (priceDiff > 0) {
            rightTextColor = colors.GREEN;
        } else if (priceDiff < 0) {
            rightTextColor = colors.ORANGE_RED;
        } else {
            rightTextColor = colors.GHOST_WHITE;
        }

        Navigation.mergeOptions(componentId, {
            topBar: {
                title: {
                    text: cryptoCurrency?.name,
                },
                rightButtons: [ {
                    id: 'none',
                    text: priceLabel,
                    enabled: false,
                    fontSize: 16,
                    fontFamily: fonts.REGULAR,
                    disabledColor: rightTextColor,
                } ]
            },
        });
    }, [componentId, cryptoCurrency, priceLabel]);

    const handleRefresh = useCallback(
        () => {
            updateCryptoWalletBalance({ cryptoId: cryptoCurrencyId, shouldUpdateCryptoList: true, });
        },
        [cryptoCurrencyId, updateCryptoWalletBalance],
    );

    const handleCreateZorkaWalletPress = useCallback(
        () => {
            createCryptoWallet({ cryptoId: cryptoCurrencyId });
        },
        [cryptoCurrencyId, createCryptoWallet],
    );

    const handleViewHistoryPress = useCallback(
        () => {
            dispatchShowModal({
                screenName: NAVIGATION.SCREENS.CRYPTO.TRANSACTIONS_LIST,
                passProps: {
                    cryptoId: cryptoCurrency?.id
                }
            });
        },
        [cryptoCurrency?.id, dispatchShowModal],
    );

    const handleSendCryptoPress = useCallback(
        () => {
            dispatchShowModal({
                screenName: NAVIGATION.SCREENS.CRYPTO.CREATE_TRANSACTION,
                passProps: {
                    cryptoId: cryptoCurrency?.id,
                },
            });
        },
        [cryptoCurrency?.id, dispatchShowModal],
    );

    const handleCopyPublicAddressPress = useCallback(
        () => {
            if (cryptoCurrency?.publicAddress) {
                Clipboard.setString(cryptoCurrency.publicAddress);
                ToastEmitter.showToast({
                    text: copiedToastrText,
                    isSuccess: true,
                });
            }
        },
        [cryptoCurrency?.publicAddress, copiedToastrText],
    );

    return (
        <CryptoWalletScreen
            onRefresh={handleRefresh}
            isRefreshing={isCryptoWalletInfoUpdating}
            cryptoCurrency={cryptoCurrency}
            onSendCryptoPress={handleSendCryptoPress}
            onViewHistoryPress={handleViewHistoryPress}
            onCreateZorkaWalletPress={handleCreateZorkaWalletPress}
            onCopyPublicAddressPress={handleCopyPublicAddressPress}
        />
    );
}

export default React.memo(CryptoWalletScreenContainer);
