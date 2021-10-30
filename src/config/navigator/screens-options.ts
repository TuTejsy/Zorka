import { Navigation, Options } from 'react-native-navigation';

import { Screen } from 'appUtils';
import { DEVICE_ORIENTATION, NAVIGATION } from 'appConstants';
import { fonts, colors } from 'appAssets/styles';

interface ScreensOptions {
    [screenName: string]: Options;
}

const screensOptions: ScreensOptions = {
    [NAVIGATION.SCREENS.COMMON.CREATE_WALLET]: {
        topBar: {
            title: {
                text: 'Create Wallet',
                color: colors.CORAL_BLACK,
                fontSize: 16,
                fontFamily: fonts.MEDIUM,
            },
            background: {
                color: colors.GHOST_WHITE,
            },
            backButton: {
                color: colors.CORAL_BLACK,
                enableMenu: false,
            },
            visible: true,
        },
    },
};

export default screensOptions;
