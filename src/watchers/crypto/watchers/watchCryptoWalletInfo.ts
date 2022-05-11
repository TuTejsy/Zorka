import { put, take, fork, call, putResolve } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';
import { CryptoCurrencyManager } from 'appUtils';

import { actionTypes } from 'appApi/client';
import { ServerAPI } from 'appApi/server';
import { CURRENCY } from 'appConstants';

export default function* () {
    yield fork(watchCryptoWalletInfo);
}

function* watchCryptoWalletInfo() {
    while(true) {
        const {
            payload: { cryptoId }
        }: {
            payload: UpdateCryptBalancePayload
        } = yield take(actionTypes.UPDATE_CRYPTO_WALLET_INFO);

        const crypto = CryptoDB.object(cryptoId);

        if (crypto) {
            try {
                const addressRepsonse: Address = yield call(
                    ServerAPI.fetchAddressInfoForCrypto,
                    crypto
                );

                yield call(CryptoCurrencyManager.processCryptoInfoResponse, addressRepsonse, cryptoId);
            } catch(err) {
                console.log('watchCryptoWalletInfo Error: ', err);
            }

            try {
                const blockchainResponse: Blockchain = yield call(
                    ServerAPI.fetchBlockchainInfo,
                    crypto
                );

                CryptoDB.modify(() => {
                    crypto.lowFee =
                    blockchainResponse.low_fee_per_kb * CURRENCY.AVERAGE_TRANSACTION_SIZE[cryptoId] / 1000;
                    crypto.highFee =
                    blockchainResponse.high_fee_per_kb * CURRENCY.AVERAGE_TRANSACTION_SIZE[cryptoId] / 1000;
                    crypto.mediumFee =
                        blockchainResponse.medium_fee_per_kb * CURRENCY.AVERAGE_TRANSACTION_SIZE[cryptoId] / 1000;
                });
            } catch(err) {
                console.log('watchCryptoWalletInfo Error: ', err);
            }
        }

        yield put({
            type: actionTypes.UPDATE_CRYPTO_LIST,
        });
        yield take(actionTypes.CRYPTO_LIST_UPDATED);

        yield putResolve({
            type: actionTypes.CRYPTO_WALLET_INFO_UPDATED,
        });
    }
}
