import React, { useState, useCallback } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface LeftSideMenuPropTypes {
    componentId: string;

    onLogoutPress: () => void,
    onSecretPhrasePress: () => void,
}

function LeftSideMenu({
    componentId,

    onLogoutPress,
    onSecretPhrasePress,
}: LeftSideMenuPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>Options</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onSecretPhrasePress}
                >
                    <Text style={styles.buttonText}>Secret Phrase</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onLogoutPress}
                >
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(LeftSideMenu);
