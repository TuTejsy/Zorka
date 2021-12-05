import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';
import { Options, Navigation } from 'react-native-navigation';

import { actionCreators } from 'appApi';
import { ToastEmitter } from 'appEmitters';
import { CurrencyId, CURRENCY } from 'appConstants';
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
    const cryptoCurrency = useCryptoCurrency(cryptoCurrencyId);

    const dispatch = useDispatch();
    const dispatchPush = useCallback(
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
                actionCreators.push({
                    passProps,
                    screenName,
                    componentId,
                    screenOptions,
                }),
            );
        },
        [componentId, dispatch],
    );

    useEffect(() => {
        dispatch(
            actionCreators.updateCryptoBalance({ cryptoId: cryptoCurrencyId }),
        );
    }, []);

    useEffect(() => {
        Navigation.mergeOptions(componentId, {
            topBar: {
                title: {
                    text: cryptoCurrency.name
                },
            },
        });
    }, [componentId, cryptoCurrency]);

    const handleCreateWalletPress = useCallback(
        () => {
            dispatch(
                actionCreators.createCryptoWallet(),
            );
        },
        [ dispatch ],
    );

    const hanldeCopyPublicAddressPress = useCallback(
        () => {
            Clipboard.setString(cryptoCurrency.publicAddress);
            ToastEmitter.showToast({
                text: 'Copied',
                isSuccess: true,
            });
        },
        [ cryptoCurrency.publicAddress ],
    );

    return (
        <CryptoWalletScreen
            cryptoCurrency={cryptoCurrency}
            onCreateWalletPress={handleCreateWalletPress}
            onCopyPublicAddressPress={hanldeCopyPublicAddressPress}
        />
    );
}

export default React.memo(CryptoWalletScreenContainer);
