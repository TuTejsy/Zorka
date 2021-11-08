import React, { useCallback } from 'react';
import { Options } from 'react-native-navigation';
import { useDispatch } from 'react-redux';

import { actionCreators } from 'appApi';
import { NAVIGATION } from 'appConstants';

import { GetStartedScreen } from 'appComponents/screens';
interface GetStartedScreenContainerPropTypes {
    componentId: string;
}

function GetStartedScreenContainer({
    componentId,
}: GetStartedScreenContainerPropTypes) {
    const dispatch = useDispatch();
    const dispatchPush = useCallback(
        (screenName: string, screenOptions?: Options) => {
            dispatch(
                actionCreators.push({
                    componentId,
                    screenName,
                    screenOptions,
                }),
            );
        },
        [componentId, dispatch],
    );

    const handleSignInPress = useCallback(() => {}, []);
    const handleCreateWalletPress = useCallback(() => {
        dispatchPush(NAVIGATION.SCREENS.AUTH.CREATE_CRYPTO_WALLET);
    }, [dispatchPush]);

    return (
        <GetStartedScreen
            onSignInPress={handleSignInPress}
            onCreateWalletPress={handleCreateWalletPress}
        />
    );
}

export default React.memo(GetStartedScreenContainer);
