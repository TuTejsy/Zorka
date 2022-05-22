import React, { useMemo, useState, useCallback } from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    LayoutChangeEvent,
    KeyboardAvoidingView,
} from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';

import { CURRENCY, LOCALIZATION } from 'appConstants';
import { useLocalizedStrings } from 'appHooks';
import { colors } from 'appAssets/styles';

import styles, { useContextualStyles } from './styles';

interface CreateTransactionScreenPropTypes {
    fee: number,
    minFee: number,
    maxFee: number,
    feeStep: number,
    preference: Preference,
    cryptoWallet: (CryptoCurrency & Object) | null | undefined,
    maxAmountText: string,
    isReadyToSend: boolean,
    sendAmountText: string,
    sendButtonText: string,
    isMaxAmountReached: boolean,
    isReciverAddressValid: boolean,
    reciverAddressInputValue: string,

    onFeeChange: (values: number | number[]) => void,
    onSendPress: () => void,
    onSendMaxPress: () => void,
    onPasteAddressPress: () => void,
    onReciverInputValueChanged: (text: string) => void,
    onSendAmountInputValueChanged: (text: string) => void,
}

function CreateTransactionScreen({
    fee,
    minFee,
    maxFee,
    feeStep,
    preference,
    cryptoWallet,
    isReadyToSend,
    maxAmountText,
    sendAmountText,
    sendButtonText,
    isMaxAmountReached,
    isReciverAddressValid,
    reciverAddressInputValue,

    onFeeChange,
    onSendPress,
    onSendMaxPress,
    onPasteAddressPress,
    onReciverInputValueChanged,
    onSendAmountInputValueChanged,
}: CreateTransactionScreenPropTypes) {
    const [
        toAddressText,
        pasteText,
        reciverAddressText,
        amountText,
        maxText,
        amountToSendText,
        feeText,
        lowPreferenceText,
        mediumPreferenceText,
        highPreferenceText,
    ] = useLocalizedStrings([
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.ELEMENTS.TO_ADDRESS_TITLE,
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.BUTTONS.PASTE,
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.ELEMENTS.RECIVER_ADDRESS_TEXT,
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.ELEMENTS.AMOUNT_TITLE,
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.BUTTONS.MAX,
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.ELEMENTS.AMOUNT_TO_SEND_TEXT,
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.ELEMENTS.FEE_TITLE,
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.ELEMENTS.PREFERENCE.LOW,
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.ELEMENTS.PREFERENCE.MEDIUM,
        LOCALIZATION.CREATE_TRANSACTION_SCREEN.ELEMENTS.PREFERENCE.HIGH,
    ]);

    const cryptoId = cryptoWallet?.id ?? 'BTC';
    const [maxLabelWidth, setMaxLabelWidth] = useState(0);

    const contextualStyles = useContextualStyles({
        preference,
        maxLabelWidth,
        isReadyToSend,
        isMaxAmountReached,
        isReciverAddressValid,
    });

    const preferenceText = useMemo(() => {
        switch(preference) {
            case 'low':
                return lowPreferenceText;

            case 'medium':
                return mediumPreferenceText;

            case 'high':
                return highPreferenceText;
        }
    }, [highPreferenceText, lowPreferenceText, mediumPreferenceText, preference]);

    const handleMaxLabelLayout = useCallback((event: LayoutChangeEvent) => {
        setMaxLabelWidth(event.nativeEvent.layout.width);
    }, []);

    return (
        <SafeAreaView style={styles.screen}>
            { global.isIos && (
                <View style={styles.swipeIndicator} />
            )}

            <KeyboardAvoidingView
                style={styles.content}
                behavior="height"
                keyboardVerticalOffset={100}
            >
                <View style={styles.form}>
                    <View style={styles.reciverAddressContainer}>
                        <View style={styles.inputTitleContainer}>
                            <Text
                                style={styles.text}
                            >{toAddressText}: </Text>

                            <Button
                                title={pasteText}
                                color={colors.YELLOW}
                                onPress={onPasteAddressPress}
                            />

                        </View>
                        <TextInput
                            style={contextualStyles.reciverAddressInput}
                            value={reciverAddressInputValue}
                            placeholder={reciverAddressText}
                            onChangeText={onReciverInputValueChanged}
                            selectionColor={colors.YELLOW}
                            placeholderTextColor={colors.GREY_70}
                        />
                    </View>

                    <View style={styles.amountContainer}>
                        <View style={styles.inputTitleContainer}>
                            <Text
                                style={styles.text}
                            >{amountText}: </Text>

                            <Button
                                title={maxText}
                                color={colors.YELLOW}
                                onPress={onSendMaxPress}
                            />

                        </View>

                        <TextInput
                            style={contextualStyles.amountToSendInput}
                            value={sendAmountText}
                            placeholder={amountToSendText}
                            keyboardType="numeric"
                            onChangeText={onSendAmountInputValueChanged}
                            selectionColor={colors.YELLOW}
                            placeholderTextColor={colors.GREY_70}
                        />

                        <Text
                            style={contextualStyles.maxAmount}
                            onLayout={handleMaxLabelLayout}
                        >/ {maxAmountText}</Text>
                    </View>

                    <View
                        style={styles.feeContainer}
                    >
                        <View style={styles.inputTitleContainer}>
                            <Text
                                style={styles.text}
                            >{feeText}: {fee / CURRENCY.SATOSHI_AMOUNT[cryptoId]} {cryptoId}</Text>

                            <Text
                                style={contextualStyles.preferenceText}
                            >
                                { preferenceText }
                            </Text>
                        </View>

                        <Slider
                            step={feeStep}
                            value={fee}
                            minimumValue={minFee}
                            maximumValue={maxFee}
                            onValueChange={onFeeChange}
                            thumbTintColor={colors.YELLOW}
                            minimumTrackTintColor={colors.YELLOW}
                            maximumTrackTintColor={colors.CORAL_BLACK}
                            containerStyle={styles.feeSliderContainer}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={contextualStyles.sendButton}
                    onPress={onSendPress}
                    disabled={!isReadyToSend}
                >
                    <Text
                        style={styles.sendButtonText}
                        numberOfLines={1}
                        ellipsizeMode="middle"
                    >{ sendButtonText }</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default React.memo(CreateTransactionScreen);
