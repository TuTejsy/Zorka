import React, { useEffect, useCallback } from 'react';


import { useAppSelector, useActions, useCryptoCurrency, useTransactions } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';
import { NAVIGATION } from 'appConstants';

import { TransactionsListScreen } from 'appComponents/screens';

interface TransactionsListScreenContainerPropTypes {
    cryptoId: CurrencyId,
    componentId: string;
}

function TransactionsListScreenContainer({
    cryptoId,
    componentId,
}: TransactionsListScreenContainerPropTypes) {
    const currency = useCryptoCurrency(cryptoId);
    const [transactions, transactionsVersion] = useTransactions(currency?.publicAddress ?? '');

    const isCryptoWalletInfoUpdating = useAppSelector(state => state.crypto.isCryptoWalletInfoUpdating);

    const [
        updateCryptoWalletBalance,
    ] = useActions<[
        ACTION_CREATORS_TYPES['updateCryptoWalletBalance'],
    ]>([
        'updateCryptoWalletBalance',
    ]);

    useEffect(() => {
        updateCryptoWalletBalance({ cryptoId });
    }, []);

    const handleRefresh = useCallback(
        () => {
            updateCryptoWalletBalance({ cryptoId });
        },
        [updateCryptoWalletBalance, cryptoId],
    );

    return (
        <TransactionsListScreen
            onRefresh={handleRefresh}
            currencyId={cryptoId}
            isRefreshing={isCryptoWalletInfoUpdating}
            currencyName={currency?.name ?? ''}
            transactions={transactions}
            transactionsVersion={transactionsVersion}
        />
    );
}

export default React.memo(TransactionsListScreenContainer);
