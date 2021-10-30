import { Navigation, Options } from 'react-native-navigation';

import { screensOptions } from 'appConfig/navigator';
import { NAVIGATION } from 'appConstants';

interface PushToPropTypes {
    passProps: any;
    screenName: string;
    componentId: string;
    screenOptions?: Options;
}

function* pushTo({
    passProps,
    screenName,
    componentId,
    screenOptions,
}: PushToPropTypes) {
    const defaultScreenOptions = screensOptions[screenName] ?? {};

    const combinedScreenOptions = {
        ...defaultScreenOptions,
        ...screenOptions,
    };

    try {
        const pushPromise = Navigation.push(componentId, {
            component: {
                name: screenName,
                options: combinedScreenOptions,
                passProps,
            },
        });

        yield pushPromise;
    } catch (err) {
        console.log(err);
    }
}

function* setupRootCryptoScreen() {
    const setRootPromise = Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        name: NAVIGATION.COMPONENTS.CORE.LEFT_SIDE_MENU,
                    },
                },
                center: {
                    stack: {
                        options: {},
                        children: [
                            {
                                component: {
                                    name: NAVIGATION.SCREENS.COMMON.CRYPTO_LIST,
                                },
                            },
                        ],
                    },
                },
            },
        },
    });

    yield setRootPromise;
}

function* setupRootGetStartedScreen() {
    const setRootPromise = Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: NAVIGATION.SCREENS.COMMON.GET_STARTED,
                        },
                    },
                ],
            },
        },
    });

    yield setRootPromise;
}

export default { pushTo, setupRootCryptoScreen, setupRootGetStartedScreen };
