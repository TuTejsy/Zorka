import { useRef, useMemo, useState, useEffect } from 'react';
import { CollectionChangeCallback, Results } from 'realm';

import { TransactionsDB } from 'appDatabase';
import { Transaction } from 'database/types';

function useTransactions(walletAddress: string): [Results<Transaction & Realm.Object>, number] {
    const transactions = useMemo(() => (
        TransactionsDB
            .objects()
            .filtered(`walletAddress = "${walletAddress}"`)
            .sorted('timestamp', true)
    ), [ walletAddress ]);

    const [transactionsVersion, setTransactionsVersion] = useState(0);
    const transactionsVersionRef = useRef(transactionsVersion);

    useEffect(() => {
        const listener: CollectionChangeCallback<Transaction> = (nextCollection, changes) => {
            const isAnythingChanged = Object.values(changes).find(arrayOfChanges => arrayOfChanges.length);
            if (isAnythingChanged) {
                setTransactionsVersion(++transactionsVersionRef.current); // triggers re-render
            }
        };

        TransactionsDB.performAfterTransactionComplete(() => transactions.addListener(listener));

        return () => { transactions.removeListener(listener); };
    }, [ transactions ]);

    return [transactions, transactionsVersion];
}

export default useTransactions;
