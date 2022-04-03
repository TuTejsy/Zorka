import React, { useCallback } from 'react';
import { Options } from 'react-native-navigation';
import { useDispatch } from 'react-redux';

import { CurrencyId } from 'appConstants';
import { useCryptoCurrency } from 'appHooks';

import { CreateTransactionScreen } from 'appComponents/screens';

interface CreateTransactionScreenContainerPropTypes {
    cryptoId: CurrencyId;
    componentId: string;
}

function CreateTransactionScreenContainer({
    cryptoId,
    componentId,
}: CreateTransactionScreenContainerPropTypes) {
    const cryptoWallet = useCryptoCurrency(cryptoId);


    return (
        <CreateTransactionScreen
            cryptoWallet={cryptoWallet}
        />
    );
}

export default React.memo(CreateTransactionScreenContainer);
