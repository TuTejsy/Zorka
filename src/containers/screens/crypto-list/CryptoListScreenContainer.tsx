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

    const [cryptoCurrencies, cryptoCurrenciesVersion] = useCryptoCurrencies('');

    useEffect(() => {
        dispatchUpdateCyptoList();
    }, []);

    return (
        <CryptoListScreen
            cryptoCurrencies={cryptoCurrencies}
            cryptoCurrenciesVersion={cryptoCurrenciesVersion}
        />
    );
}

export default React.memo(CryptoListScreenContainer);
