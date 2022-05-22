import React, { useCallback } from 'react';
import { Navigation ,Options } from 'react-native-navigation';

import { Keychain } from 'appUtils';
import { KEYCHAIN, NAVIGATION, LOCALIZATION_MODE } from 'appConstants';
import { useActions, useAppSelector } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';
import { LeftSideMenu } from 'appComponents/navigation';

interface LeftSideMenuContainerPropTypes {
    componentId: string;
}

function LeftSideMenuContainer({
    componentId,
}: LeftSideMenuContainerPropTypes) {
    const localeMode = useAppSelector(state => state.appState.localizationMode);

    const [
        push,
        logout,
        changeAppLocalization,
    ] = useActions<[
        ACTION_CREATORS_TYPES['push'],
        ACTION_CREATORS_TYPES['logout'],
        ACTION_CREATORS_TYPES['changeAppLocalization'],
    ]>([
        'push',
        'logout',
        'changeAppLocalization',
    ]);

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
            push({
                passProps,
                screenName,
                componentId: NAVIGATION.STACKS.CRYPTO_LIST,
                screenOptions,
            });
        },
        [ push ],
    );

    const handleLanguageSelect = useCallback((localMode: keyof typeof LOCALIZATION_MODE) => {
        changeAppLocalization(localMode);
    }, [ changeAppLocalization ]);

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
            localeMode={localeMode}
            componentId={componentId}
            onLogoutPress={logout}
            onLanguageSelect={handleLanguageSelect}
            onSecretPhrasePress={handleSecretPhrasePress}
        />);
}

export default React.memo(LeftSideMenuContainer);
