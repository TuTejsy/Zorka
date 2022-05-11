import { put, call, fork, take } from 'redux-saga/effects';
import { enc, AES } from 'crypto-js';
import Bitcore, { Networks } from 'bitcore-lib';


import { Keychain, Generator } from 'appUtils';
import { KEYCHAIN } from 'appConstants';
import { operations } from 'appOperations';
import { ServerAPI } from 'appApi/server';
import { actionTypes } from 'appApi/client';
import { CryptoDB } from 'appDatabase';

export default function* () {
    yield fork(watchEnterSecretPhrase);
}

function* watchEnterSecretPhrase() {
    while(true) {
        const {
            payload: { secretPhrase },
        }: { payload: EnterSecretPhrasePayload } = yield take(
            actionTypes.ENTER_SECRET_PHRASE,
        );

        if (secretPhrase) {
            try {
                const {
                    publicKey,
                    privateKey,
                } = Generator.privateAndPublicKeys(secretPhrase);

                const eWallet: string | undefined = yield call(ServerAPI.getEWalletById, publicKey);

                if (eWallet) {
                    const decryptedWallet = AES.decrypt(eWallet, privateKey).toString(enc.Utf8);
                    const cryptoWallets = decryptedWallet.split(';').map((cryptoWalletString) => {
                        const [cryptoId, cryptoPrivateKey] = cryptoWalletString
                            .split('#')
                            .filter(string => !!string)
                            .map(string => string.slice(3));

                        const bitcoreKey = new Bitcore.PrivateKey(cryptoPrivateKey, Networks.testnet);

                        const crypto: CryptoCurrency = {
                            id: cryptoId as CurrencyId,
                            name: cryptoId,
                            balance: 0,
                            lastPrice: '0',
                            prevPrice: '0',
                            privateKey: cryptoPrivateKey,
                            privateWif: bitcoreKey.toWIF(),
                            publicAddress: bitcoreKey.toAddress().toString(),
                            unconfirmedBalance: 0,
                        };

                        return crypto;
                    });

                    CryptoDB.upsert(cryptoWallets);

                    yield call(
                        Keychain.setItem,
                        KEYCHAIN.KEYS.SECRET_PHRASE,
                        secretPhrase,
                    );

                    yield call(operations.setupRootCryptoScreen);
                }
            } catch(err) {
                console.log(err);
            }
        }
    }
}
