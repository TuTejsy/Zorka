import { useRef, useMemo, useState, useEffect } from 'react';
import { CollectionChangeCallback, Results } from 'realm';

import { CryptoDB } from 'appDatabase';

function useCryptoCurrencies(filter: string): [Results<CryptoCurrency & Realm.Object>, number] {
    const cryptoCurrencies = useMemo(() => (
        CryptoDB.objects()
    ), []);

    const [cryptoCurrenciesVersion, setCryptoCurrenciesVersion] = useState(0);
    const cryptoCurrenciesVersionRef = useRef( cryptoCurrenciesVersion);

    useEffect(() => {
        const listener: CollectionChangeCallback<CryptoCurrency> = (nextCollection, changes) => {
            const isAnythingChanged = Object.values(changes).find(arrayOfChanges => arrayOfChanges.length);
            if (isAnythingChanged) {
                setCryptoCurrenciesVersion(++cryptoCurrenciesVersionRef.current); // triggers re-render
            }
        };

        CryptoDB.performAfterTransactionComplete(() => cryptoCurrencies.addListener(listener));

        return () => { cryptoCurrencies.removeListener(listener); };
    }, [ cryptoCurrencies ]);

    return [cryptoCurrencies, cryptoCurrenciesVersion];
}

export default useCryptoCurrencies;
