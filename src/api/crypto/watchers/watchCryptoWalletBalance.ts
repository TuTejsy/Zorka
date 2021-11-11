import { take, fork, call } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';

import cryptoTypes from '../action-types';
import { UpdateCryptBalancePayload } from '../types';

export default function* () {
    yield fork(watchCryptoWalletBalance);
}

function* watchCryptoWalletBalance() {
    while(true) {
        const {
            payload: { cryptoId }
        }: {
            payload: UpdateCryptBalancePayload
        } = yield take(cryptoTypes.UPDATE_CRYPTO_BALANCE);

        const crypto = CryptoDB.object(cryptoId);

        if (crypto?.publicAddress) {
            try {
                const jsonRepsonse: object = yield fetch(
                    `https://api.blockcypher.com/v1/btc/test3/addrs/${crypto.publicAddress}/balance`
                ).then((response) => {
                    const json = response.json();
                    return json;
                });

                const cryptoBalance: number = jsonRepsonse.balance;
                const unconfirmedBalance: number = jsonRepsonse.unconfirmed_balance;

                if (cryptoBalance) {
                    CryptoDB.modify(() => {
                        crypto.balance = cryptoBalance;
                        crypto.unconfirmedBalance = unconfirmedBalance;
                    });
                }
            } catch(err) {
                console.log('watchCryptoWalletBalance Error: ', err);
            }
        }
    }
}
