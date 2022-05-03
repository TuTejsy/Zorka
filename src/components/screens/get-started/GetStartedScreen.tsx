import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './styles';

interface GetStartedScreenPropTypes {
    onSignInPress: () => void;
    onCreateZorkaWalletPress: () => void;
}

function GetStartedScreen({
    onSignInPress,
    onCreateZorkaWalletPress,
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
                    style={styles.CreateZorkaWalletButton}
                    onPress={onCreateZorkaWalletPress}>
                    <Text style={styles.CreateZorkaWalletButtonText}>
                        Create Wallet
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(GetStartedScreen);
