import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './styles';

interface GetStartedScreenPropTypes {
    onSignInPress: () => void;
    onCreateWalletPress: () => void;
}

function GetStartedScreen({
    onSignInPress,
    onCreateWalletPress,
}: GetStartedScreenPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>Zorka Wallet</Text>

            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={onSignInPress}>
                    <Text style={styles.signInButtonText}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.createWalletButton}
                    onPress={onCreateWalletPress}>
                    <Text style={styles.createWalletButtonText}>
                        Create Wallet
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(GetStartedScreen);
