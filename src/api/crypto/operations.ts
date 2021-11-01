import { call } from 'redux-saga/effects';
import Nomics from 'nomics';
import { CURRENCY, NOMIX_API_KEY } from './constants';

async function fetchCurrenciesInfo(): Promise<Array<CryptoCurrency>> {
    const interalToFetch = '1h';
    const nomics = new Nomics({
        apiKey: NOMIX_API_KEY
    });

    try {
        const currencyTickers = await nomics.currenciesTicker({
            ids: Object.values(CURRENCY.ID),
            interval: [ interalToFetch ],
        });

        const currenciesInfo: Array<CryptoCurrency> = [];
        currencyTickers.forEach((currencyTicker) => {
            const currency: CryptoCurrency = {
                id: currencyTicker.id,
                name: currencyTicker.currency,
                logoUrl: currencyTicker.logo_url,
                lastPrice: currencyTicker.price,
            };

            currenciesInfo.push(currency);
        });
        return currenciesInfo;
    } catch(err) {
        console.error(err);
    }

    return [];
}


export default {
    fetchCurrenciesInfo
};
