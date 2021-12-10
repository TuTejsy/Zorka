import { Navigation, Options } from 'react-native-navigation';

import { Screen } from 'appUtils';
import { DEVICE_ORIENTATION, NAVIGATION } from 'appConstants';
import { fonts, colors } from 'appAssets/styles';

interface ScreensOptions {
    [screenName: string]: Options;
}

const screensOptions: ScreensOptions = {
    [NAVIGATION.SCREENS.COMMON.GET_STARTED]: {
        topBar: {
            title: {
                text: 'Get Started',
            },
        },
    },
    [NAVIGATION.SCREENS.COMMON.CRYPTO_LIST]: {
        topBar: {
            title: {
                text: 'Zorka Wallet',
                color: colors.GHOST_WHITE,
                fontFamily: fonts.MEDIUM,
            },
            searchBar: {
                visible: false,
                tintColor: colors.GHOST_WHITE,
            },
            rightButtons: [ {
                id: NAVIGATION.COMPONENTS.NAVBAR.UPDATE_CRYPTO_LIST_BUTTON,
                component: {
                    name:  NAVIGATION.COMPONENTS.NAVBAR.UPDATE_CRYPTO_LIST_BUTTON,
                }
            } ],
            leftButtons: [ {
                id: NAVIGATION.COMPONENTS.NAVBAR.SIDE_BAR_BUTTON,
                component: {
                    name:  NAVIGATION.COMPONENTS.NAVBAR.SIDE_BAR_BUTTON,
                }
            } ],
            background: {
                color: colors.BLACK,
            },
            backButton: {
                color: colors.GHOST_WHITE,
                title: '',
                enableMenu: false,
            },
            visible: true,
        },
    },
    [NAVIGATION.SCREENS.COMMON.CRYPTO_WALLET]: {
        topBar: {
            title: {
                color: colors.GHOST_WHITE,
                fontSize: 16,
                fontFamily: fonts.MEDIUM,
            },
            backButton: {
                color: colors.GHOST_WHITE,
            },

            background: {
                color: colors.CORAL_BLACK,
            },
            visible: true,
        },
    },
    [NAVIGATION.SCREENS.COMMON.BACKUP]: {
        topBar: {
            title: {
                text: 'Secret Phrase',
                color: colors.GHOST_WHITE,
                fontSize: 16,
                fontFamily: fonts.MEDIUM,
            },
            background: {
                color: colors.BLACK,
            },
            backButton: {
                color: colors.GHOST_WHITE,
                title: '',
                enableMenu: false,
            },
            visible: true,
        },
    },

    [NAVIGATION.SCREENS.AUTH.CREATE_CRYPTO_WALLET]: {
        topBar: {
            title: {
                text: 'Create Wallet',
                color: colors.GHOST_WHITE,
                fontSize: 16,
                fontFamily: fonts.MEDIUM,
            },
            background: {
                color: colors.BLACK,
            },
            backButton: {
                color: colors.GHOST_WHITE,
                title: '',
                enableMenu: false,
            },
            visible: true,
        },
    },
    [NAVIGATION.SCREENS.AUTH.GENERATED_SECRET_PHRASE]: {
        topBar: {
            title: {
                text: 'Secret Phrase',
                color: colors.GHOST_WHITE,
                fontSize: 16,
                fontFamily: fonts.MEDIUM,
            },
            background: {
                color: colors.BLACK,
            },
            backButton: {
                color: colors.GHOST_WHITE,
                title: '',
                enableMenu: false,
            },
            visible: true,
        },
    },
};

export default screensOptions;
