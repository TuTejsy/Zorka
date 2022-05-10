import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';
import { Options, Navigation } from 'react-native-navigation';

import { actionCreators } from 'appApi/client';
import { ToastEmitter } from 'appEmitters';
import { NAVIGATION } from 'appConstants';
import { useActions, useCryptoCurrency } from 'appHooks';
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
    const [isRefreshing, setIsRefreshing] = useState(false);
    const cryptoCurrency = useCryptoCurrency(cryptoCurrencyId);

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
        updateCryptoWalletBalance({ cryptoId: cryptoCurrencyId });
    }, []);

    useEffect(() => {
        if (isRefreshing) {
            setIsRefreshing(false);
        }
    }, [cryptoCurrency ,isRefreshing]);

    useEffect(() => {
        Navigation.mergeOptions(componentId, {
            topBar: {
                title: {
                    text: cryptoCurrency?.name
                },
            },
        });
    }, [componentId, cryptoCurrency]);

    const handleRefresh = useCallback(
        () => {
            setIsRefreshing(true);

            updateCryptoWalletBalance({ cryptoId: cryptoCurrencyId });
        },
        [cryptoCurrencyId, updateCryptoWalletBalance],
    );

    const handleCreateZorkaWalletPress = useCallback(
        () => {
            createCryptoWallet();
        },
        [ createCryptoWallet ],
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
                    text: 'Copied',
                    isSuccess: true,
                });
            }
        },
        [ cryptoCurrency?.publicAddress ],
    );

    return (
        <CryptoWalletScreen
            onRefresh={handleRefresh}
            isRefreshing={isRefreshing}
            cryptoCurrency={cryptoCurrency}
            onSendCryptoPress={handleSendCryptoPress}
            onViewHistoryPress={handleViewHistoryPress}
            onCreateZorkaWalletPress={handleCreateZorkaWalletPress}
            onCopyPublicAddressPress={handleCopyPublicAddressPress}
        />
    );
}

export default React.memo(CryptoWalletScreenContainer);
