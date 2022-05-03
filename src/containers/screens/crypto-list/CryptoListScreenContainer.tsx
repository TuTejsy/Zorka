import React, { useEffect, useCallback } from 'react';
import { Options } from 'react-native-navigation';

import { NAVIGATION } from 'appConstants';
import { useActions, useCryptoCurrencies } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';

import { CryptoListScreen } from 'appComponents/screens';

interface CryptoListScreenContainerPropTypes {
    componentId: string;
}

function CryptoListScreenContainer({
    componentId,
}: CryptoListScreenContainerPropTypes) {
    const [
        push,
        updateCryptoList,
    ] = useActions<[
        ACTION_CREATORS_TYPES['push'],
        ACTION_CREATORS_TYPES['updateCryptoList'],
    ]>([
        'push',
        'updateCryptoList',
    ]);

    const dispatchPush = useCallback(
        ({
            passProps,
            screenName,
            screenOptions,
        }: {
            screenName: string;

            passProps?: any;
            screenOptions?: Options;
        }) => {
            push({
                passProps,
                screenName,
                componentId,
                screenOptions,
            });
        },
        [componentId, push],
    );

    const [cryptoCurrencies, cryptoCurrenciesVersion] = useCryptoCurrencies('');

    useEffect(() => {
        updateCryptoList();
    }, []);

    const handleCryptoCurrencyPress = useCallback(
        (cryptoCurrencyId: CurrencyId) => {
            dispatchPush({
                screenName: NAVIGATION.SCREENS.CRYPTO.CRYPTO_WALLET,
                passProps: { cryptoCurrencyId }
            });
        },
        [ dispatchPush ],
    );

    return (
        <CryptoListScreen
            cryptoCurrencies={cryptoCurrencies}
            onCryptoCurrencyPress={handleCryptoCurrencyPress}
            cryptoCurrenciesVersion={cryptoCurrenciesVersion}
        />
    );
}

export default React.memo(CryptoListScreenContainer);
