import { useState, useEffect } from 'react';
import { ObjectChangeCallback } from 'realm';

import { CryptoDB } from 'appDatabase';
import { getMapById } from 'appUtils';
import { CurrencyId } from 'appConstants';
import { CryptoCurrency } from 'database/types';

function useCryptoCurrency(
    cryptoId: CurrencyId,
    propsToWatch?: Array<keyof CryptoCurrency>
): (CryptoCurrency & Realm.Object) | null | undefined {
    const [cryptoCurrency, setCryptoCurrency] = useState(CryptoDB.object(cryptoId));

    useEffect(() => {
        const cryptoCurrency = CryptoDB.object(cryptoId);

        if (cryptoCurrency) {
            setCryptoCurrency(cryptoCurrency.cloneZRK<CryptoCurrency>());
            let propsToWatchMap: {[props: string]: boolean} = {};

            if (propsToWatch) {
                propsToWatchMap = getMapById.toExists(propsToWatch);
            }

            const listener: ObjectChangeCallback = (nextcryptoCurrency, { changedProperties, deleted }) => {
                let isAnythingChanged = !!changedProperties.length;

                if (propsToWatch) {
                    isAnythingChanged = changedProperties.some(changedProp => propsToWatchMap[changedProp]);
                }

                if (isAnythingChanged) {
                    setCryptoCurrency(nextcryptoCurrency.cloneZRK<CryptoCurrency>());
                }
            };

            CryptoDB.performAfterTransactionComplete(() => cryptoCurrency.addListener(listener));

            return () => { cryptoCurrency.removeListener(listener); };
        }
    }, [cryptoId, propsToWatch]);

    return cryptoCurrency;
}

export default useCryptoCurrency;
