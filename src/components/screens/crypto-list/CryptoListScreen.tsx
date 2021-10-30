import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { LoadingCircle } from 'appComponents/core';

import styles from './styles';

interface CryptoListScreenPropTypes {
    isGenerating: boolean;
    onGenerateSecretPhrasePress: () => void;
}

function CryptoListScreen({
    isGenerating = false,
    onGenerateSecretPhrasePress,
}: CryptoListScreenPropTypes) {
    return <SafeAreaView style={styles.screen} />;
}

export default React.memo(CryptoListScreen);
