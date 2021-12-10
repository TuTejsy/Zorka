import { call, fork, take } from 'redux-saga/effects';
import { SHA512, enc, AES } from 'crypto-js';
import RNFS from 'react-native-fs';
import { Share } from 'react-native';

import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';
import { CryptoDB } from 'appDatabase';

import authTypes from '../action-types';

export default function* () {
    yield fork(watchSaveBackup);
}

function* watchSaveBackup() {
    while(true) {
        yield take(authTypes.SAVE_BACKUP);

        try {
            const secretPhrase: string | null = yield call(Keychain.getItem, KEYCHAIN.KEYS.SECRET_PHRASE);

            if (secretPhrase) {
                const privateKey = SHA512(secretPhrase).toString(enc.Base64);

                const cryptoWallets = CryptoDB.objects();

                const dataToEncrypt = cryptoWallets.map(wallet => (
                    `#id=${wallet.id}#PK=${wallet.privateKey}`
                )).join(';');
                const encryptedBackup = AES.encrypt(dataToEncrypt, privateKey);

                const path = `${RNFS.DocumentDirectoryPath}/backup.zrk`;

                yield call(RNFS.writeFile,path, encryptedBackup.toString(), 'utf8');
                Share.share({ url: path });
            }
        } catch(err) {
            console.error(err);
        }
    }
}
