import React from 'react';
import { Text, TextInput, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';

import styles from './styles';

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

            <KeyboardAvoidingView style={styles.content}>
                <Text style={styles.sendTitle}>Send {cryptoWallet?.name}</Text>

                <View>
                    <Text
                        style={styles.text}
                    >To: </Text>
                    <TextInput
                        style={styles.reciverAddressInput}
                        placeholder="Reciver address"
                        selectionColor={colors.YELLOW}
                    />
                </View>

                <View>
                    <Text
                        style={styles.text}
                    >Amount: </Text>
                    <TextInput
                        style={styles.amountToSendInput}
                        placeholder="Amount"
                        selectionColor={colors.YELLOW}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default React.memo(CreateTransactionScreen);
