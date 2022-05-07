import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { LoadingCircle } from 'appComponents/core';

import styles from './styles';

interface EnterSecretPharseScreenPropTypes {
    onUploadSecretPhrasePress: () => void,
}

function EnterSecretPharseScreen({
    onUploadSecretPhrasePress,
}: EnterSecretPharseScreenPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>

            <TouchableOpacity
                style={styles.uploadButton}
                onPress={onUploadSecretPhrasePress}
            >
                <Text style={styles.uploadText}>Upload Secret Phrase</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}

export default React.memo(EnterSecretPharseScreen);
