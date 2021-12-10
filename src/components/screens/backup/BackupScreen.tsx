import React, { MutableRefObject } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import ViewShot from 'react-native-view-shot';

import { SecretPharse } from 'appComponents/core';

import styles from './styles';

interface BackupScreenPropTypes {
    componentId: string;
    secretPhrase: string;
    secretPhraseRef: MutableRefObject<ViewShot | undefined>;

    onSaveBackupPress: () => void,
    onSaveSecretPharsePress: () => void;
}

function BackupScreen({
    componentId,
    secretPhrase,
    secretPhraseRef,

    onSaveBackupPress,
    onSaveSecretPharsePress,
}: BackupScreenPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>
            <ViewShot
                ref={secretPhraseRef}
                style={styles.secretPhraseContainer}
            >
                <SecretPharse secretPhrase={secretPhrase} />
            </ViewShot>

            <TouchableOpacity
                onPress={onSaveBackupPress}
                style={styles.saveBackupButton}
            >
                <Text style={styles.saveText}>Save Backup</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.saveSecretPharseButton}
                onPress={onSaveSecretPharsePress}
            >
                <Text style={styles.saveText}>Save Secret Phrase</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default React.memo(BackupScreen);
