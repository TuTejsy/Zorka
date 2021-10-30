import React, { MutableRefObject } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';

import ViewShot from 'react-native-view-shot';

import { SecretPharse } from './components';
import styles from './styles';

interface GeneratedSecretPhraseScreenPropTypes {
    secretPhrase: string;
    secretPhraseRef: MutableRefObject<ViewShot | undefined>;

    onSaveSecretPharsePress: () => void;
}

function GeneratedSecretPhraseScreen({
    secretPhrase,
    secretPhraseRef,

    onSaveSecretPharsePress,
}: GeneratedSecretPhraseScreenPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>
            <ViewShot
                ref={secretPhraseRef}
                style={styles.secretPhraseContainer}>
                <SecretPharse secretPhrase={secretPhrase} />
            </ViewShot>

            <TouchableOpacity
                onPress={onSaveSecretPharsePress}
                style={styles.saveButton}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default React.memo(GeneratedSecretPhraseScreen);
