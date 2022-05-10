import React, { useState, useCallback, useMemo } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { Address, Networks } from 'bitcore-lib';
import { Navigation } from 'react-native-navigation';

import { CURRENCY } from 'appConstants';
import { useActions, useCryptoCurrency } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';

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

    const [sendAmountInputValue, setSendAmountInputValue] = useState('0');
    const [reciverAddressInputValue, setReciverAddressInputValue] = useState('');

    const [feeStep, minFee, maxFee] = useMemo(() => {
        let step = 0;
        let min = 0;
        let max = 0;

        if (cryptoWallet) {
            step = Math.round((cryptoWallet.highFee - cryptoWallet.lowFee) / 15);
            min = cryptoWallet.lowFee - 3 * step;
            max = cryptoWallet.highFee + 3 * step;
        }

        return [step, min, max];
    }, [ cryptoWallet ]);

    const [fee, setFee] = useState((minFee + maxFee) / 2);

    const [
        createTransaction,
    ] = useActions<[
        ACTION_CREATORS_TYPES['createTransaction'],
    ]>([
        'createTransaction',
    ]);


    const isReciverAddressValid: boolean = useMemo(
        () => !reciverAddressInputValue
            || Address.isValid(reciverAddressInputValue, Networks.testnet, Address.PayToPublicKeyHash),
        [ reciverAddressInputValue ]
    );

    const maxAmount = useMemo(() => {
        if (cryptoWallet) {
            return (cryptoWallet?.balance - fee) / CURRENCY.SATOSHI_AMOUNT[cryptoWallet?.id];
        }

        return 0;
    }, [cryptoWallet, fee]);

    const maxAmountText = useMemo(() => {
        if (cryptoWallet) {
            return `${maxAmount} ${cryptoWallet.name}`;
        }

        return '';
    }, [cryptoWallet, maxAmount]);

    const isMaxAmountReached = useMemo(() => {
        const totalSendAmount = Number(sendAmountInputValue);

        return totalSendAmount > maxAmount;
    }, [maxAmount, sendAmountInputValue]);

    const preference: Preference = useMemo(() => {
        if (cryptoWallet) {
            if (fee > cryptoWallet.mediumFee) {
                if (fee > (cryptoWallet.mediumFee + cryptoWallet.highFee) / 2) {
                    return 'high';
                }
            } else {
                if (fee < (cryptoWallet.lowFee + cryptoWallet.mediumFee) / 2) {
                    return 'low';
                }
            }
        }

        return 'medium';
    }, [cryptoWallet, fee]);

    const isReadyToSend = useMemo(
        () => !isMaxAmountReached && isReciverAddressValid && !!sendAmountInputValue && !!reciverAddressInputValue,
        [isMaxAmountReached, isReciverAddressValid, reciverAddressInputValue, sendAmountInputValue]
    );

    const sendButtonText = useMemo(() => {
        if (!isReciverAddressValid) {
            return 'Invalid Address';
        }

        if (cryptoWallet) {
            return `Send ${sendAmountInputValue} ${cryptoWallet.name}`;
        }

        return '';
    }, [cryptoWallet, isReciverAddressValid, sendAmountInputValue]);


    const handlePasteAddressPress = useCallback(async () => {
        const clipboardValue = await Clipboard.getString();
        setReciverAddressInputValue(clipboardValue.trim());
    }, []);

    const handleReciverInputValueChanged = useCallback((value: string) => {
        setReciverAddressInputValue(value.trim());
    }, []);

    const handleSendMaxPress = useCallback(() => {
        if (cryptoWallet) {
            setSendAmountInputValue(`${maxAmount}`);
        }
    }, [cryptoWallet, maxAmount]);

    const handleSendAmountInputValueChanged = useCallback((value: string) => {
        setSendAmountInputValue(value);
    }, []);

    const handleFeeChange = useCallback((value: number | number[]) => {
        let fee: number;
        if (typeof value === 'number') {
            fee = value;
        } else {
            fee = value[0];
        }

        setFee(fee);
    }, []);

    const handleSendPress = useCallback(() => {
        if (cryptoWallet) {
            createTransaction({
                fee,
                reciverAddress: reciverAddressInputValue,
                valueInSatoshi: Number(sendAmountInputValue) * CURRENCY.SATOSHI_AMOUNT[cryptoWallet.id],
            });

            Navigation.dismissModal(componentId);
        }
    }, [componentId, createTransaction, cryptoWallet, fee, reciverAddressInputValue, sendAmountInputValue]);

    return (
        <CreateTransactionScreen
            fee={fee}
            minFee={minFee}
            maxFee={maxFee}
            feeStep={feeStep}
            preference={preference}
            onFeeChange={handleFeeChange}
            onSendPress={handleSendPress}
            cryptoWallet={cryptoWallet}
            maxAmountText={maxAmountText}
            isReadyToSend={isReadyToSend}
            sendButtonText={sendButtonText}
            sendAmountText={sendAmountInputValue}
            onSendMaxPress={handleSendMaxPress}
            isMaxAmountReached={isMaxAmountReached}
            onPasteAddressPress={handlePasteAddressPress}
            isReciverAddressValid={isReciverAddressValid}
            reciverAddressInputValue={reciverAddressInputValue}
            onReciverInputValueChanged={handleReciverInputValueChanged}
            onSendAmountInputValueChanged={handleSendAmountInputValueChanged}
        />
    );
}

export default React.memo(CreateTransactionScreenContainer);
