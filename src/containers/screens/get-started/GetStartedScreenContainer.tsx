import React, { useCallback } from 'react';
import { Navigation } from 'react-native-navigation';
import { NAVIGATION } from 'appConstants';
import { fonts, colors } from 'appAssets/styles';

import { GetStartedScreen } from 'appComponents/screens';

interface GetStartedScreenContainerPropTypes {
    componentId: string;
}

function GetStartedScreenContainer({
    componentId,
}: GetStartedScreenContainerPropTypes) {
    const handleSignInPress = useCallback(() => {}, []);
    const handleCreateWalletPress = useCallback(() => {
        Navigation.push(componentId, {
            component: {
                name: NAVIGATION.SCREENS.COMMON.CREATE_WALLET,
                options: {
                    topBar: {
                        title: {
                            text: 'Create Wallet',
                            color: colors.GREY,
                            fontSize: 16,
                            fontFamily: fonts.MEDIUM,
                        },
                        background: {
                            color: colors.BLUE,
                        },
                        backButton: {
                            color: colors.GREY,
                            enableMenu: false,
                        },
                        visible: true,
                    },
                },
            },
        });
    }, [componentId]);

    return (
        <GetStartedScreen
            onSignInPress={handleSignInPress}
            onCreateWalletPress={handleCreateWalletPress}
        />
    );
}

export default React.memo(GetStartedScreenContainer);
