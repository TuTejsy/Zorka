import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { LoadingCircle } from 'appComponents/core';

import styles from './styles';

interface CreateWalletScreenPropTypes {
    isGenerating: boolean;
    onGenerateSecretPhrasePress: () => void;
}

function CreateWalletScreen({
    isGenerating = false,
    onGenerateSecretPhrasePress,
}: CreateWalletScreenPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.generateSecretPhraseContainer}>
                {isGenerating ? (
                    <LoadingCircle
                        size={Screen.width * 0.6}
                        style={styles.loadingCirlce}
                        color={colors.CORAL_BLACK}
                        strokeWidth={5}
                        backgroundColor={colors.GHOST_WHITE}>
                        <View style={styles.generateTextContainer}>
                            <Text style={styles.generateText}>
                                Generating a
                            </Text>
                            <Text style={styles.generateText}>
                                Secret Phrase
                            </Text>
                        </View>
                    </LoadingCircle>
                ) : (
                    <TouchableOpacity
                        style={styles.generateSecretPhraseButton}
                        onPress={onGenerateSecretPhrasePress}>
                        <View style={styles.generateTextContainer}>
                            <Text style={styles.generateText}>Generate a</Text>
                            <Text style={styles.generateText}>
                                Secret Phrase
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
}

export default React.memo(CreateWalletScreen);
