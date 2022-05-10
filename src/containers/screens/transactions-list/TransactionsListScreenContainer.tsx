import React, { useCallback } from 'react';


import { useCryptoCurrency, useTransactions } from 'appHooks';
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

    return (
        <TransactionsListScreen
            currencyId={cryptoId}
            currencyName={currency?.name ?? ''}
            transactions={transactions}
            transactionsVersion={transactionsVersion}
        />
    );
}

export default React.memo(TransactionsListScreenContainer);
