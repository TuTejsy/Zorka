import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Options } from 'react-native-navigation';

import { actionCreators } from 'appApi';
import { Generator } from 'appUtils';
import { NAVIGATION, CURRENCY } from 'appConstants';
import { useCryptoCurrency } from 'appHooks';
import { CryptoWalletScreen } from 'appComponents/screens';

interface CryptoWalletScreenContainerPropTypes {
    componentId: string;
}

function CryptoWalletScreenContainer({
    componentId,
}: CryptoWalletScreenContainerPropTypes) {
    const cryptoCurrency = useCryptoCurrency(CURRENCY.ID.BTC);

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
            actionCreators.updateCryptoBalance({ cryptoId: 'BTC' }),
        );
    }, []);

    const handleCreateWalletPress = useCallback(
        () => {
            dispatch(
                actionCreators.createCryptoWallet(),
            );
        },
        [ dispatch ],
    );

    return (
        <CryptoWalletScreen
            cryptoCurrency={cryptoCurrency}
            onCreateWalletPress={handleCreateWalletPress}
        />
    );
}

export default React.memo(CryptoWalletScreenContainer);
