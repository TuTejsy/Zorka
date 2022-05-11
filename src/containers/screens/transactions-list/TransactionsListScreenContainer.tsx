import React, { useEffect, useCallback } from 'react';
import { NativeSyntheticEvent } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { ContextMenuOnPressNativeEvent } from 'react-native-context-menu-view';

import { useAppSelector, useActions, useCryptoCurrency, useTransactions } from 'appHooks';
import { ToastEmitter } from 'appEmitters';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';

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

    const isCryptoWalletInfoUpdating = useAppSelector(state => state.crypto.isCryptoWalletInfoUpdating[cryptoId]);

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

    const makeOnTransactionOptionSelect = useCallback(
        (transactionIndex) => {
            const transaction = transactions[transactionIndex];

            return (e: NativeSyntheticEvent<ContextMenuOnPressNativeEvent>) => {
                switch(e.nativeEvent.index) {
                    case 0: {
                        if (transaction.isIncoming) {
                            Clipboard.setString(transaction.sender);
                        } else {
                            Clipboard.setString(transaction.reciver);
                        }

                        ToastEmitter.showToast({
                            text: 'Copied',
                            isSuccess: true,
                        });
                        break;
                    }
                }
            };
        }, [ transactions ]);

    return (
        <TransactionsListScreen
            onRefresh={handleRefresh}
            currencyId={cryptoId}
            isRefreshing={isCryptoWalletInfoUpdating}
            currencyName={currency?.name ?? ''}
            transactions={transactions}
            transactionsVersion={transactionsVersion}
            makeOnTransactionOptionSelect={makeOnTransactionOptionSelect}
        />
    );
}

export default React.memo(TransactionsListScreenContainer);
