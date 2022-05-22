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
    ] = useLocalizedStrings([
        LOCALIZATION.CREATE_WALLET_SCREEN.NAVBAR.TITLE,
        LOCALIZATION.CREATE_WALLET_SCREEN.BUTTONS.GENERATE_SECRET_PHRASE
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
            <View style={styles.generateSecretPhraseContainer}>
                { isGenerating ? (
                    <LoadingCircle
                        size={Screen.width * 0.6}
                        style={styles.loadingCirlce}
                        color={colors.ORANGE_RED}
                        strokeWidth={5}
                        backgroundColor={colors.GHOST_WHITE}
                    >
                        <View style={styles.generateTextContainer}>
                            <Text style={styles.generateText}>
                                { generateSecretPhraseText }
                            </Text>
                        </View>
                    </LoadingCircle>
                ) : (
                    <TouchableOpacity
                        style={styles.generateSecretPhraseButton}
                        onPress={onGenerateSecretPhrasePress}
                    >
                        <View style={styles.generateTextContainer}>
                            <Text style={styles.generateText}>
                                { generateSecretPhraseText }
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
}

export default React.memo(CreateWalletScreen);
