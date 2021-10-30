import { Options } from 'react-native-navigation';
import { colors, fonts } from 'appAssets/styles';

import { Screen } from 'appUtils';
import { DEVICE_ORIENTATION } from 'appConstants';

const getDefaultOptions: () => Options = () => ({
    bottomTab: {
        fontSize: 10,
        iconColor: colors.BLACK,
        labelColor: colors.BLACK,
        fontFamily: fonts.REGULAR,
        backgroundColor: colors.WHITE,
    },
    bottomTabs: {
        visible: false,
        drawBehind: true,
    },
    topBar: {
        title: {
            title: 'Get Started',
            color: colors.BLACK,
        },
        visible: false,
    },
    layout: {
        orientation: [DEVICE_ORIENTATION.PORTRAIT],
        backgroundColor: colors.WHITE,
    },
    statusBar: {
        backgroundColor: 'transparent',
        style: 'dark',
    },
    popGesture: true,
    ...(global.isAndroid && {
        animations: {
            push: {
                waitForRender: true,
                content: {
                    x: {
                        from: Screen.width,
                        to: 0,
                        duration: 300,
                        interpolation: { type: 'decelerate' },
                    },
                },
            },
            pop: {
                content: {
                    x: {
                        from: 0,
                        to: Screen.width,
                        duration: 300,
                        interpolation: { type: 'decelerate' },
                    },
                },
            },
        },
    }),
});

export default getDefaultOptions;
