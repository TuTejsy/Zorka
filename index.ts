import 'node-libs-react-native/globals';

import './src/polyfills';

import { Navigation } from 'react-native-navigation';

import { configureStore } from 'appConfig/redux';
import { registerScreens } from 'appConfig/screens';
import { getDefaultOptions } from 'appConfig/navigator';
import { operations } from 'appOperations';
import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';

Keychain.getItem(KEYCHAIN.KEYS.SECRET_PHRASE).then( async (secretPhrase: string | null) => {
    if (secretPhrase) {
        await operations.openEncryptedDB(secretPhrase);
    }

    const store = configureStore();
    registerScreens(store);

    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setDefaultOptions(getDefaultOptions());
    });
});
