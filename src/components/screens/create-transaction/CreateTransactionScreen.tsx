import React from 'react';
import { Text, TextInput, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { LoadingCircle } from 'appComponents/core';

import styles from './styles';
import { CryptoCurrency } from 'database/types';

interface CreateTransactionScreenPropTypes {
    cryptoWallet: (CryptoCurrency & Object) | null | undefined
}

function CreateTransactionScreen({
    cryptoWallet,
}: CreateTransactionScreenPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>
            { global.isIos && (
                <View style={styles.swipeIndicator} />
            )}

            <KeyboardAvoidingView>
                <TextInput
                    placeholder="Amount"
                />
                <TextInput
                    placeholder="Reciver address"
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default React.memo(CreateTransactionScreen);
