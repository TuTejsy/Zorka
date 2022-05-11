import React, { useState, useCallback } from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    SafeAreaView,
    LayoutChangeEvent,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';

import { CURRENCY } from 'appConstants';
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
    const cryptoId = cryptoWallet?.id ?? 'BTC';
    const [maxLabelWidth, setMaxLabelWidth] = useState(0);

    const contextualStyles = useContextualStyles({
        preference,
        maxLabelWidth,
        isReadyToSend,
        isMaxAmountReached,
        isReciverAddressValid,
    });

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
                            >To address: </Text>

                            <Button
                                title="Paste"
                                color={colors.YELLOW}
                                onPress={onPasteAddressPress}
                            />

                        </View>
                        <TextInput
                            style={contextualStyles.reciverAddressInput}
                            value={reciverAddressInputValue}
                            placeholder="Reciver address"
                            onChangeText={onReciverInputValueChanged}
                            selectionColor={colors.YELLOW}
                            placeholderTextColor={colors.GREY_70}
                        />
                    </View>

                    <View style={styles.amountContainer}>
                        <View style={styles.inputTitleContainer}>
                            <Text
                                style={styles.text}
                            >Amount: </Text>

                            <Button
                                title="MAX"
                                color={colors.YELLOW}
                                onPress={onSendMaxPress}
                            />

                        </View>

                        <TextInput
                            style={contextualStyles.amountToSendInput}
                            value={sendAmountText}
                            placeholder="Amount to send"
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
                            >Fee: {fee / CURRENCY.SATOSHI_AMOUNT[cryptoId]} {cryptoId}</Text>

                            <Text
                                style={contextualStyles.preferenceText}
                            >
                                { preference.toUpperCase() }
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
