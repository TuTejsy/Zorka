import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Navigation ,Options } from 'react-native-navigation';

import { Keychain } from 'appUtils';
import { KEYCHAIN, NAVIGATION } from 'appConstants';
import { actionCreators } from 'appApi';
import { LeftSideMenu } from 'appComponents/navigation';

interface LeftSideMenuContainerPropTypes {
    componentId: string;
}

function LeftSideMenuContainer({
    componentId,
}: LeftSideMenuContainerPropTypes) {
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
                    componentId: NAVIGATION.STACKS.CRYPTO_LIST,
                    screenOptions,
                }),
            );
        },
        [ dispatch ],
    );

    const dispatchLogout = useCallback(
        () => {
            dispatch(
                actionCreators.logout(),
            );
        },
        [ dispatch ],
    );

    const handleSecretPhrasePress = useCallback(
        () => {
            Keychain.getItem(KEYCHAIN.KEYS.SECRET_PHRASE).then((secretPhrase: string | null) => {
                if (secretPhrase) {
                    dispatchPush({
                        passProps: {
                            secretPhrase
                        },
                        screenName: NAVIGATION.SCREENS.COMMON.BACKUP,
                    });

                    Navigation.mergeOptions(NAVIGATION.COMPONENTS.CORE.LEFT_SIDE_MENU, {
                        sideMenu: {
                            left: {
                                visible: false,
                            },
                        }
                    });
                }
            });
        },
        [ dispatchPush ],
    );
    return (
        <LeftSideMenu
            componentId={componentId}
            onLogoutPress={dispatchLogout}
            onSecretPhrasePress={handleSecretPhrasePress}
        />);
}

export default React.memo(LeftSideMenuContainer);
