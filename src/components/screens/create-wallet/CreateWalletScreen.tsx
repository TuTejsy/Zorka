import React, { useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { Screen } from 'appUtils';
import { LOCALIZATION } from 'appConstants';
import { useLocalizedStrings } from 'appHooks';
import { colors } from 'appAssets/styles';
import { LoadingCircle } from 'appComponents/core';

import styles from './styles';

interface CreateWalletScreenPropTypes {
    componentId: string,
    isGenerating: boolean;

    onGenerateSecretPhrasePress: () => void;
}

function CreateWalletScreen({
    componentId,
    isGenerating = false,

    onGenerateSecretPhrasePress,
}: CreateWalletScreenPropTypes) {
    const [
        navbarTitleText,
        generateSecretPhraseText,
        attentionText,
    ] = useLocalizedStrings([
        LOCALIZATION.CREATE_WALLET_SCREEN.NAVBAR.TITLE,
        LOCALIZATION.CREATE_WALLET_SCREEN.BUTTONS.GENERATE_SECRET_PHRASE,
        LOCALIZATION.CREATE_WALLET_SCREEN.TEXT.ATTENTION_TEXT,
    ]);

    useEffect(() => {
        Navigation.mergeOptions(componentId, {
            topBar: {
                title: {
                    text: navbarTitleText
                }
            }
        });
    }, [componentId, navbarTitleText]);

    return (
        <SafeAreaView style={styles.screen}>
            <View
                style={styles.attentionContainer}
            >
                <Text
                    style={styles.attentionText}
                >{attentionText}</Text>
            </View>

            <View style={styles.generateSecretPhraseContainer}>
                { isGenerating ? (
                    <LoadingCircle
                        size={Screen.width * 0.5}
                        style={styles.loadingCirlce}
                        color={colors.ORANGE_RED}
                        strokeWidth={5}
                        backgroundColor={colors.GHOST_WHITE}
                    />
                ) : (
                    <TouchableOpacity
                        style={styles.generateSecretPhraseButton}
                        onPress={onGenerateSecretPhrasePress}
                    />
                )}

                <View
                    style={styles.generateTextContainer}
                    pointerEvents="none"
                >
                    <Text style={styles.generateText}>
                        { generateSecretPhraseText }
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(CreateWalletScreen);
