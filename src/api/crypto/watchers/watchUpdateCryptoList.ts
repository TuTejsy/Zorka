import { call, fork, take } from 'redux-saga/effects';

import { CryptoDB } from 'appDatabase';

import cryptoTypes from '../action-types';
import cryptoOperations from '../operations';

export default function* () {
    yield fork(watchUpdateCryptoList);
}

function* watchUpdateCryptoList() {
    while(true) {
        yield take(cryptoTypes.UPDATE_CRYPTO_LIST);

        const currenciesInfo: CryptoCurrency[] = yield call(cryptoOperations.fetchCurrenciesInfo);
        CryptoDB.upsert(currenciesInfo);
    }
}
