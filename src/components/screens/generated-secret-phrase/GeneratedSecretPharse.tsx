import React, { useEffect, MutableRefObject } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { Navigation } from 'react-native-navigation';

import { NAVIGATION } from 'appConstants';
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
    useEffect(() => {
        Navigation.registerComponent(
            NAVIGATION.COMPONENTS.NAVBAR.DONE_BUTTON,
            () => props =>
                <NavBarDoneButton onDonePress={onDonePress} {...props} />,
            () => NavBarDoneButton,
        );

        Navigation.mergeOptions(componentId, {
            topBar: {
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
    }, [componentId, onDonePress]);

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
                <Text style={styles.saveText}>Copy Secret Phrase</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onSaveSecretPharsePress}
                style={styles.saveButton}
            >
                <Text style={styles.saveText}>Save Secret Phrase</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default React.memo(GeneratedSecretPhraseScreen);
