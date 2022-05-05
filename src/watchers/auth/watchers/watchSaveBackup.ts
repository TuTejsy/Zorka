import { call, fork, put, take } from 'redux-saga/effects';
import { SHA512, enc, AES } from 'crypto-js';

import { Keychain } from 'appUtils';
import { KEYCHAIN } from 'appConstants';
import { CryptoDB } from 'appDatabase';
import { ServerAPI } from 'appApi/server';
import { actionTypes } from 'appApi/client';

export default function* () {
    yield fork(watchSaveBackup);
}

function* watchSaveBackup() {
    while(true) {
        yield take(actionTypes.BACKUP_SAVE);

        try {
            const secretPhrase: string | null = yield call(Keychain.getItem, KEYCHAIN.KEYS.SECRET_PHRASE);

            if (secretPhrase) {
                const privateKey = SHA512(secretPhrase).toString(enc.Hex);
                const publicKey = SHA512(privateKey).toString(enc.Hex);

                const cryptoWallets = CryptoDB.objects();

                const dataToEncrypt = cryptoWallets.map(wallet => (
                    `#id=${wallet.id}#PK=${wallet.privateKey}`
                )).join(';');
                const encryptedBackup = AES.encrypt(dataToEncrypt, privateKey);

                yield call(ServerAPI.upsertEWallet, publicKey, encryptedBackup.toString());

                yield put({
                    type: actionTypes.BACKUP_SAVE_SUCCESS
                });
            }
        } catch(err) {
            yield put({
                type: actionTypes.BACKUP_SAVE_FAIL
            });

            console.error(err);
        }
    }
}
