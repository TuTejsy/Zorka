/* eslint-disable no-param-reassign */
import { call, fork, putResolve, take } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';
import { CURRENCY } from 'appConstants';

import { ServerAPI } from 'appApi/server';
import { actionTypes } from 'appApi/client';

export default function* () {
    yield fork(watchUpdateCryptoList);
}

function* watchUpdateCryptoList() {
    while(true) {
        yield take(actionTypes.UPDATE_CRYPTO_LIST);

        const currenciesInfo: CryptoCurrency[] = yield call(ServerAPI.fetchCurrenciesInfo);

        currenciesInfo.forEach((currency) => {
            const cryptoCurrency = CryptoDB.object(currency.id);

            if (!cryptoCurrency ) {
                return;
            }

            currency.totalPrice = currency.lastPrice * cryptoCurrency.balance / CURRENCY.SATOSHI_AMOUNT[currency.id];

            if (cryptoCurrency?.lastPrice !== currency.lastPrice) {
                currency.prevPrice = cryptoCurrency?.lastPrice || currency.lastPrice;
            }
        }, []);

        yield call(CryptoDB.upsert, currenciesInfo);

        yield putResolve({
            type: actionTypes.CRYPTO_LIST_UPDATED,
        });
    }
}
