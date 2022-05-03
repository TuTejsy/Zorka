import React, { useCallback } from 'react';


import { useTransactions } from 'appHooks';
import { NAVIGATION } from 'appConstants';

import { TransactionsListScreen } from 'appComponents/screens';

interface TransactionsListScreenContainerPropTypes {
    componentId: string;
    walletAddress: string;
}

function TransactionsListScreenContainer({
    componentId,
    walletAddress,
}: TransactionsListScreenContainerPropTypes) {
    const [transactions, transactionsVersion] = useTransactions(walletAddress);

    return (
        <TransactionsListScreen
            transactions={transactions}
            transactionsVersion={transactionsVersion}
        />
    );
}

export default React.memo(TransactionsListScreenContainer);
