import React, { useCallback } from 'react';
import { Options } from 'react-native-navigation';
import { useDispatch } from 'react-redux';

import { actionCreators } from 'appApi/client';
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

    const dispatch = useDispatch();

    return (
        <TransactionsListScreen
            transactions={transactions}
            transactionsVersion={transactionsVersion}
        />
    );
}

export default React.memo(TransactionsListScreenContainer);
