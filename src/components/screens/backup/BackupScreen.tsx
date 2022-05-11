import React, { MutableRefObject } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import ViewShot from 'react-native-view-shot';
import ContextMenu, { ContextMenuOnPressNativeEvent } from 'react-native-context-menu-view';

import { SecretPharse } from 'appComponents/core';

import styles from './styles';

interface BackupScreenPropTypes {
    componentId: string;
    secretPhrase: string;
    secretPhraseRef: MutableRefObject<ViewShot | undefined>;

    onCopySecretPhrasePress: () => void,
    onSaveSecretPharsePress: () => void;
}

function BackupScreen({
    componentId,
    secretPhrase,
    secretPhraseRef,

    onCopySecretPhrasePress,
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
                style={styles.saveBackupButton}
                onPress={onCopySecretPhrasePress}
            >
                <Text style={styles.saveText}>Copy Secret Phrase</Text>
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
