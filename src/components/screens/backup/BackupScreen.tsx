import React, { useEffect, MutableRefObject } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { Navigation } from 'react-native-navigation';

import { LOCALIZATION } from 'appConstants';
import { useLocalizedStrings } from 'appHooks';
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
    const [
        navbarTitleText,
        copySecretPhraseText,
        saveSecretPhraseText,
    ] = useLocalizedStrings([
        LOCALIZATION.BACKUP_SCREEN.NAVBAR.TITLE,
        LOCALIZATION.BACKUP_SCREEN.BUTTONS.COPY_SECRET_PHRASE,
        LOCALIZATION.BACKUP_SCREEN.BUTTONS.SAVE_SECRET_PHRASE,
    ]);

    useEffect(() => {
        Navigation.mergeOptions(componentId, {
            topBar: {
                title: {
                    text: navbarTitleText
                },
            },
        });
    }, [componentId, navbarTitleText]);

    return (
        <SafeAreaView style={styles.screen}>
            <ViewShot
                ref={secretPhraseRef}
                style={styles.secretPhraseContainer}
            >
                <SecretPharse secretPhrase={secretPhrase} />
            </ViewShot>

            <TouchableOpacity
                style={styles.copySecretPhraseButton}
                onPress={onCopySecretPhrasePress}
            >
                <Text style={styles.saveText}>{ copySecretPhraseText }</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.saveSecretPharseButton}
                onPress={onSaveSecretPharsePress}
            >
                <Text style={styles.saveText}> {saveSecretPhraseText} </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default React.memo(BackupScreen);
