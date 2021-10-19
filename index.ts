import './polyfills';

import { Navigation, Options } from 'react-native-navigation';

import { configureStore } from 'appConfig/redux';
import { registerScreens } from 'appConfig/screens';
import { getDefaultOptions } from 'appConfig/navigator';
import { NAVIGATION } from './src/constants';

const store = configureStore();
registerScreens(store);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions(getDefaultOptions());

    Navigation.setRoot({
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
});
