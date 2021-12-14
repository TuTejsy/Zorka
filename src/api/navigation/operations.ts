import { Navigation, Options } from 'react-native-navigation';

import { screensOptions } from 'appConfig/navigator';
import { NAVIGATION } from 'appConstants';
import { ShowModalPayload } from './types';

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
    } catch(err) {
        console.log(err);
    }
}

function* showModal({
    passProps,
    screenName,
    screenOptions,
}: ShowModalPayload) {
    const defaultScreenOptions = screensOptions[screenName] ?? {};

    const combinedScreenOptions = {
        ...defaultScreenOptions,
        ...screenOptions,
    };

    try {
        const shoModalPromise = Navigation.showModal({
            component: {
                name: screenName,
                options: combinedScreenOptions,
                passProps,
            }
        });

        yield shoModalPromise;
    } catch(err) {
        console.log(err);
    }
}

function* setupRootCryptoScreen() {
    const defaultScreenOptions =
        screensOptions[NAVIGATION.SCREENS.CRYPTO.CRYPTO_LIST] ?? {};

    const setRootPromise = Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        id: NAVIGATION.COMPONENTS.CORE.LEFT_SIDE_MENU,
                        name: NAVIGATION.COMPONENTS.CORE.LEFT_SIDE_MENU,
                    },
                },
                center: {
                    stack: {
                        id: NAVIGATION.STACKS.CRYPTO_LIST,
                        options: {
                        },
                        children: [
                            {
                                component: {
                                    name: NAVIGATION.SCREENS.CRYPTO.CRYPTO_LIST,
                                    options: defaultScreenOptions,
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
    const defaultScreenOptions =
        screensOptions[NAVIGATION.SCREENS.COMMON.GET_STARTED] ?? {};

    const setRootPromise = Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: NAVIGATION.SCREENS.COMMON.GET_STARTED,
                            options: defaultScreenOptions,
                        },
                    },
                ],
            },
        },
    });

    yield setRootPromise;
}

export default {
    pushTo,
    showModal,
    setupRootCryptoScreen,
    setupRootGetStartedScreen,
};
