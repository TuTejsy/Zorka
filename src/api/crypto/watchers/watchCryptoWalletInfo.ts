import { take, fork, call } from 'redux-saga/effects';

import { CryptoDB, TransactionsDB } from 'appDatabase';
import { CryptoCurrencyManager } from 'appUtils';

import { Transaction } from 'database/types';

import cryptoTypes from '../action-types';
import { UpdateCryptBalancePayload } from '../types';;

export default function* () {
    yield fork(watchCryptoWalletInfo);
}

function* watchCryptoWalletInfo() {
    while(true) {
        const {
            payload: { cryptoId }
        }: {
            payload: UpdateCryptBalancePayload
        } = yield take(cryptoTypes.UPDATE_CRYPTO_WALLET_INFO);

        const crypto = CryptoDB.object(cryptoId);
        const publicAddress = crypto?.publicAddress;

        if (publicAddress) {
            try {
                const jsonRepsonse: BlockchyperResponse = yield call(
                    CryptoCurrencyManager.fetchAddressInfoForCrypto,
                    crypto
                );

                const cryptoBalance: number = jsonRepsonse.balance;
                const unconfirmedBalance: number = jsonRepsonse.unconfirmed_balance;

                if (cryptoBalance) {
                    CryptoDB.modify(() => {
                        crypto.balance = cryptoBalance;
                        crypto.unconfirmedBalance = unconfirmedBalance;
                    });

                    const transactionsToUpsert: Array<Transaction> = [];

                    jsonRepsonse.txrefs?.forEach((confirmedTransaction) => {
                        const transaction = CryptoCurrencyManager.convertTransactionToDB(
                            confirmedTransaction,
                            publicAddress
                        );

                        transactionsToUpsert.push(transaction);
                    });

                    jsonRepsonse.unconfirmed_txrefs?.forEach((unconfirmedTransaction) => {
                        const transaction = CryptoCurrencyManager.convertTransactionToDB(
                            unconfirmedTransaction,
                            publicAddress
                        );

                        transactionsToUpsert.push(transaction);
                    });

                    TransactionsDB.upsert(transactionsToUpsert);
                }
            } catch(err) {
                console.log('watchCryptoWalletInfo Error: ', err);
            }
        }
    }
}
