import { Navigation } from 'react-native-navigation';

import { screensOptions } from 'appConfig/navigator';
import { NAVIGATION } from 'appConstants';

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

export default setupRootGetStartedScreen;
