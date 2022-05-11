import { call, fork, putResolve, take } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';

import { ServerAPI } from 'appApi/server';
import { actionTypes } from 'appApi/client';

export default function* () {
    yield fork(watchUpdateCryptoList);
}

function* watchUpdateCryptoList() {
    while(true) {
        yield take(actionTypes.UPDATE_CRYPTO_LIST);

        const currenciesInfo: CryptoCurrency[] = yield call(ServerAPI.fetchCurrenciesInfo);
        yield call(CryptoDB.upsert, currenciesInfo);

        yield putResolve({
            type: actionTypes.CRYPTO_LIST_UPDATED,
        });
    }
}
