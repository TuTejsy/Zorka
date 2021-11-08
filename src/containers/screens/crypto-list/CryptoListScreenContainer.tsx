import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Options } from 'react-native-navigation';

import { actionCreators } from 'appApi';
import { Generator } from 'appUtils';
import { NAVIGATION } from 'appConstants';
import { useCryptoCurrencies } from 'appHooks';

import { CryptoListScreen } from 'appComponents/screens';

interface CryptoListScreenContainerPropTypes {
    componentId: string;
}

function CryptoListScreenContainer({
    componentId,
}: CryptoListScreenContainerPropTypes) {
    const dispatch = useDispatch();

    const dispatchUpdateCyptoList = useCallback(() => {
        dispatch(actionCreators.updateCryptoList());
    }, [ dispatch ]);

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

    const [cryptoCurrencies, cryptoCurrenciesVersion] = useCryptoCurrencies('');

    useEffect(() => {
        dispatchUpdateCyptoList();
    }, []);

    const handleCryptoCurrencyPress = useCallback(
        () => {
            dispatchPush({ screenName: NAVIGATION.SCREENS.COMMON.CRYPTO_WALLET });
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
