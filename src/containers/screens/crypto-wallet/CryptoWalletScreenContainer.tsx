import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';
import { Options, Navigation } from 'react-native-navigation';

import { actionCreators } from 'appApi/client';
import { ToastEmitter } from 'appEmitters';
import { CurrencyId, CURRENCY, NAVIGATION } from 'appConstants';
import { useCryptoCurrency } from 'appHooks';
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

    const dispatch = useDispatch();
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
            dispatch(
                actionCreators.showModal({
                    passProps,
                    screenName,
                    screenOptions,
                }),
            );
        },
        [ dispatch ],
    );

    useEffect(() => {
        dispatch(
            actionCreators.updateCryptoWalletBalance({ cryptoId: cryptoCurrencyId }),
        );
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

            dispatch(
                actionCreators.updateCryptoWalletBalance({ cryptoId: cryptoCurrencyId }),
            );
        },
        [cryptoCurrencyId, dispatch],
    );

    const handleCreateWalletPress = useCallback(
        () => {
            dispatch(
                actionCreators.createCryptoWallet(),
            );
        },
        [ dispatch ],
    );

    const handleViewHistoryPress = useCallback(
        () => {
            dispatchShowModal({
                screenName: NAVIGATION.SCREENS.CRYPTO.TRANSACTIONS_LIST,
                passProps: {
                    walletAddress: cryptoCurrency?.publicAddress
                }
            });
        },
        [cryptoCurrency?.publicAddress, dispatchShowModal],
    );

    const handleSendCryptoPress = useCallback(
        () => {
            dispatchShowModal({
                screenName: NAVIGATION.SCREENS.CRYPTO.CREATE_TRANSACTION,
                passProps: {
                },
            });
        },
        [ dispatchShowModal ],
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
            onCreateWalletPress={handleCreateWalletPress}
            onCopyPublicAddressPress={handleCopyPublicAddressPress}
        />
    );
}

export default React.memo(CryptoWalletScreenContainer);
