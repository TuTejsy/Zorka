import './polyfills';

import { Navigation, Options } from 'react-native-navigation';
import { SHA512, enc } from 'crypto-js';

import { configureStore } from 'appConfig/redux';
import { registerScreens } from 'appConfig/screens';
import { getDefaultOptions } from 'appConfig/navigator';
import { CryptoDB } from 'appDatabase';
import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';

Keychain.getItem(KEYCHAIN.KEYS.SECRET_PHRASE).then((secretPhrase: string | null) => {
    if (secretPhrase) {
        const privateKey = SHA512(secretPhrase).toString(enc.Base64);
        const privateKeyBuffer = Buffer.from(privateKey, 'base64');

        CryptoDB.open(privateKeyBuffer);
    }
});

const store = configureStore();
registerScreens(store);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions(getDefaultOptions());
});
