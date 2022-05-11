import { call, fork, take } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';
import { CURRENCY } from 'appConstants';
import { ToastEmitter } from 'appEmitters';
import { CryptoCurrencyManager } from 'appUtils';
import { actionTypes } from 'appApi/client';
import { ServerAPI } from 'appApi/server';

function* watchCryptoCreateTransaction() {
    while(true) {
        const {
            payload: {
                fee,
                reciverAddress,
                valueInSatoshi,
            }
        }: {
            payload: CreateTransactionPayload
        } = yield take(actionTypes.CREATE_TRANSACTION);

        try {
            const btcWallet = CryptoDB.object(CURRENCY.ID.BTC);

            if (!btcWallet || !btcWallet.publicAddress) {
                continue;
            }

            const jsonRepsonse: Address = yield call(
                ServerAPI.fetchAddressInfoForCrypto,
                btcWallet
            );

            yield call(CryptoCurrencyManager.processCryptoInfoResponse, jsonRepsonse, CURRENCY.ID.BTC);

            const newTransaction: string = yield call(CryptoCurrencyManager.createTransaction, {
                fee,
                outputAddress: reciverAddress,
                valueInSatoshi,
            });

            const singedTX: TX = yield call (ServerAPI.pushRawTransaction, newTransaction);
            const sentAmount = (valueInSatoshi + fee) / CURRENCY.SATOSHI_AMOUNT.BTC;

            ToastEmitter.showToast({
                text: `${sentAmount} BTC Sent`,
                isSuccess: true,
            });
        } catch(err) {
            ToastEmitter.showToast({
                text: 'BTC sending failed',
                isSuccess: false,
            });
            console.error(err);
        }
    }
}

export default watchCryptoCreateTransaction;
