import 'node-libs-react-native/globals';

import './polyfills';

import { Navigation } from 'react-native-navigation';
import { SHA512, enc } from 'crypto-js';

import { configureStore } from 'appConfig/redux';
import { registerScreens } from 'appConfig/screens';
import { getDefaultOptions } from 'appConfig/navigator';
import { CryptoDB, TransactionsDB } from 'appDatabase';
import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';

// Keychain.getItem(KEYCHAIN.KEYS.SECRET_PHRASE).then((secretPhrase: string | null) => {
//     if (secretPhrase) {
//         const privateKey = SHA512(secretPhrase).toString(enc.Base64);
//         const privateKeyBuffer = Buffer.from(privateKey, 'base64');

//         CryptoDB.open(privateKeyBuffer);
//     }

//     const store = configureStore();
//     registerScreens(store);

//     Navigation.events().registerAppLaunchedListener(() => {
//         Navigation.setDefaultOptions(getDefaultOptions());
//     });
// })

CryptoDB.open();
TransactionsDB.open();

const store = configureStore();
registerScreens(store);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions(getDefaultOptions());
});
