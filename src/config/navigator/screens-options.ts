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
            visible: false,

            backButton: {
                color: colors.GHOST_WHITE,
                title: '',
                enableMenu: false,
            },
        },
    },
    [NAVIGATION.SCREENS.CRYPTO.CRYPTO_LIST]: {
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
    [NAVIGATION.SCREENS.CRYPTO.CRYPTO_WALLET]: {
        topBar: {
            title: {
                color: colors.GHOST_WHITE,
                fontSize: 18,
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
                fontSize: 18,
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

    [NAVIGATION.SCREENS.AUTH.ENTER_SECRET_PHARSE]: {
        topBar: {
            title: {
                text: 'Enter Secret Phrase',
                color: colors.GHOST_WHITE,
                fontSize: 18,
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
        statusBar: {
            style: 'dark',
        }
    },

    [NAVIGATION.SCREENS.AUTH.CREATE_CRYPTO_WALLET]: {
        topBar: {
            title: {
                text: 'Create Wallet',
                color: colors.GHOST_WHITE,
                fontSize: 18,
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
                fontSize: 18,
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
