import React, { useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import { Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { LOCALIZATION } from 'appConstants';
import { useLocalizedStrings } from 'appHooks';

import { EnterSecretPhraseArea } from './components';
import styles from './styles';

interface EnterSecretPharseScreenPropTypes {
    componentId: string,

    onSubmitSecretPhrase: (secretPhrase: string) => void,
    onUploadSecretPhrasePress: () => void,
}

function EnterSecretPharseScreen({
    componentId,

    onSubmitSecretPhrase,
    onUploadSecretPhrasePress,
}: EnterSecretPharseScreenPropTypes) {
    const [
        navbarTitleText,
        uploadSecretPhraseText,
    ] = useLocalizedStrings([
        LOCALIZATION.ENTER_SECRET_PHRASE_SCREEN.NAVBAR.TITLE,
        LOCALIZATION.ENTER_SECRET_PHRASE_SCREEN.BUTTONS.UPLOAD_SECRET_PHRASE
    ]);

    useEffect(() => {
        Navigation.mergeOptions(componentId, {
            topBar: {
                title: {
                    text: navbarTitleText
                }
            }
        });
    }, [componentId, navbarTitleText]);

    return (
        <SafeAreaView style={styles.screen}>
            <EnterSecretPhraseArea
                style={styles.enterSecretPhraseArea}
                isSecretPhraseValid
                onSubmitSecretPhrase={onSubmitSecretPhrase}
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
                    <Text style={styles.uploadText}>{uploadSecretPhraseText}</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}

export default React.memo(EnterSecretPharseScreen);
