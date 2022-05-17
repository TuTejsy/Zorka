import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { LoadingCircle } from 'appComponents/core';

import { EnterSecretPhraseArea } from './components';
import styles from './styles';

interface EnterSecretPharseScreenPropTypes {
    onUploadSecretPhrasePress: () => void,
}

function EnterSecretPharseScreen({
    onUploadSecretPhrasePress,
}: EnterSecretPharseScreenPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>
            <EnterSecretPhraseArea
                style={styles.enterSecretPhraseArea}
            />

            <KeyboardAvoidingView
                style={styles.keyboardAvoidingContent}
                behavior="padding"
                keyboardVerticalOffset={50}
            >
                <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={onUploadSecretPhrasePress}
                >
                    <Text style={styles.uploadText}>Upload Secret Phrase</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}

export default React.memo(EnterSecretPharseScreen);
