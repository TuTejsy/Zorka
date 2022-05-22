import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { LOCALIZATION } from 'appConstants';
import { useLocalizedStrings } from 'appHooks';

import styles from './styles';

interface GetStartedScreenPropTypes {
    onSignInPress: () => void;
    onCreateZorkaWalletPress: () => void;
}

function GetStartedScreen({
    onSignInPress,
    onCreateZorkaWalletPress,
}: GetStartedScreenPropTypes) {
    const [
        enterSecretPhrseText,
        createWalletText,
    ] = useLocalizedStrings([
        LOCALIZATION.GET_STARTED_SCREEN.BUTTONS.ENTER_SECRET_PHRASE,
        LOCALIZATION.GET_STARTED_SCREEN.BUTTONS.CREATE_WALLET,
    ]);

    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>Zorka Wallet</Text>

            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={onSignInPress}
                >
                    <Text style={styles.signInButtonText}>{enterSecretPhrseText}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.CreateZorkaWalletButton}
                    onPress={onCreateZorkaWalletPress}
                >
                    <Text style={styles.CreateZorkaWalletButtonText}>
                        { createWalletText }
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(GetStartedScreen);
