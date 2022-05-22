import React, { useEffect, MutableRefObject } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { Navigation } from 'react-native-navigation';

import { NAVIGATION } from 'appConstants';
import { LOCALIZATION } from 'appConstants';
import { useLocalizedStrings } from 'appHooks';
import { SecretPharse } from 'appComponents/core';
import { NavBarDoneButton } from './components';
import styles from './styles';

interface GeneratedSecretPhraseScreenPropTypes {
    componentId: string;
    secretPhrase: string;
    secretPhraseRef: MutableRefObject<ViewShot | undefined>;

    onDonePress: () => void;
    onCopySecretPhrasePress: () => void,
    onSaveSecretPharsePress: () => void;
}

function GeneratedSecretPhraseScreen({
    componentId,
    secretPhrase,
    secretPhraseRef,

    onDonePress,
    onCopySecretPhrasePress,
    onSaveSecretPharsePress,
}: GeneratedSecretPhraseScreenPropTypes) {
    const [
        navbarTitleText,
        navbarRightButtonText,
        copySecretPhraseText,
        saveSecretPhraseText,
    ] = useLocalizedStrings([
        LOCALIZATION.GENERATED_SECRET_PHRASE_SCREEN.NAVBAR.TITLE,
        LOCALIZATION.GENERATED_SECRET_PHRASE_SCREEN.NAVBAR.RIGHT_BUTTON,
        LOCALIZATION.GENERATED_SECRET_PHRASE_SCREEN.BUTTONS.COPY_SECRET_PHRASE,
        LOCALIZATION.GENERATED_SECRET_PHRASE_SCREEN.BUTTONS.SAVE_SECRET_PHRASE,
    ]);

    useEffect(() => {
        Navigation.registerComponent(
            NAVIGATION.COMPONENTS.NAVBAR.DONE_BUTTON,
            () => props =>
                (<NavBarDoneButton
                    title={navbarRightButtonText}
                    onDonePress={onDonePress}
                />),
            () => NavBarDoneButton,
        );

        Navigation.mergeOptions(componentId, {
            topBar: {
                title: {
                    text: navbarTitleText
                },

                rightButtons: [
                    {
                        id: NAVIGATION.COMPONENTS.NAVBAR.DONE_BUTTON,
                        component: {
                            name: NAVIGATION.COMPONENTS.NAVBAR.DONE_BUTTON,
                        },
                    },
                ],
            },
        });
    }, [componentId, navbarTitleText, onDonePress, navbarRightButtonText]);

    return (
        <SafeAreaView
            style={styles.screen}
        >
            <ViewShot
                ref={secretPhraseRef}
                style={styles.secretPhraseContainer}
            >
                <SecretPharse secretPhrase={secretPhrase} />
            </ViewShot>

            <View>
                <TouchableOpacity
                    style={styles.copySecretPhraseButton}
                    onPress={onCopySecretPhrasePress}
                >
                    <Text style={styles.saveText}>{copySecretPhraseText}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onSaveSecretPharsePress}
                    style={styles.saveButton}
                >
                    <Text style={styles.saveText}>{saveSecretPhraseText}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(GeneratedSecretPhraseScreen);
