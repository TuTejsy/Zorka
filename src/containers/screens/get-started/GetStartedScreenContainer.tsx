import React, { useCallback } from 'react';
import { Options } from 'react-native-navigation';

import { actionCreators } from 'appApi/client';
import { NAVIGATION } from 'appConstants';
import { useActions } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';
import { GetStartedScreen } from 'appComponents/screens';
interface GetStartedScreenContainerPropTypes {
    componentId: string;
}

function GetStartedScreenContainer({
    componentId,
}: GetStartedScreenContainerPropTypes) {
    const [
        push,
    ] = useActions<[
        ACTION_CREATORS_TYPES['push'],
    ]>([
        'push',
    ]);

    const dispatchPush = useCallback(
        (screenName: string, screenOptions?: Options) => {
            push({
                componentId,
                screenName,
                screenOptions,
            });
        },
        [push, componentId],
    );

    const handleSignInPress = useCallback(() => {}, []);
    const handleCreateWalletPress = useCallback(() => {
        dispatchPush(NAVIGATION.SCREENS.AUTH.CREATE_CRYPTO_WALLET);
    }, [ dispatchPush ]);

    return (
        <GetStartedScreen
            onSignInPress={handleSignInPress}
            onCreateWalletPress={handleCreateWalletPress}
        />
    );
}

export default React.memo(GetStartedScreenContainer);
