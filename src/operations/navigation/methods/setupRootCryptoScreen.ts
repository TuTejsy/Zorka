import { Navigation } from 'react-native-navigation';
import { screensOptions } from 'appConfig/navigator';
import { NAVIGATION } from 'appConstants';


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

export default setupRootCryptoScreen;
