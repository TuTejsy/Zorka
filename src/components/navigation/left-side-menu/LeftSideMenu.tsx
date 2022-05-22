import React, { useMemo } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, TextBase } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { LOCALIZATION, LOCALIZAION_MODE_TITLE, LOCALIZATION_MODE } from 'appConstants';
import { useLocalizedStrings } from 'appHooks';

import { colors, fonts } from 'appAssets/styles';

import styles from './styles';

interface LeftSideMenuPropTypes {
    localeMode: keyof typeof LOCALIZATION_MODE,
    componentId: string;

    onLogoutPress: () => void,
    onSecretPhrasePress: () => void,
    onLanguageSelect: (localMode: keyof typeof LOCALIZATION_MODE) => void,
}

function LeftSideMenu({
    localeMode,
    componentId,

    onLogoutPress,
    onLanguageSelect,
    onSecretPhrasePress,
}: LeftSideMenuPropTypes) {
    const [
        titleText,
        languageText,
        secretPhraseText,
        logoutText,
    ] = useLocalizedStrings([
        LOCALIZATION.LEFT_SIDE_BAR.TITLE,
        LOCALIZATION.LEFT_SIDE_BAR.ELEMENTS.LANGUAGE,
        LOCALIZATION.LEFT_SIDE_BAR.BUTTONS.SECRET_PHRASE,
        LOCALIZATION.LEFT_SIDE_BAR.BUTTONS.LOGOUT,
    ]);

    const localsList = useMemo(() => Object.values(LOCALIZATION_MODE), []);

    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>{titleText}</Text>

            <View style={styles.buttonsContainer}>
                <View
                    style={styles.localizationContainer}
                >
                    <Text
                        style={styles.languageTitle}
                    >{languageText}: </Text>
                    <Picker
                        style={styles.languagePicker}
                        selectedValue={localeMode}
                        onValueChange={onLanguageSelect}
                    >

                        { localsList.map(locale => (
                            <Picker.Item
                                key={locale}
                                color={colors.GHOST_WHITE}
                                label={LOCALIZAION_MODE_TITLE[locale]} value={locale}
                                fontFamily={fonts.REGULAR}
                            />
                        )) }
                    </Picker>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={onSecretPhrasePress}
                >
                    <Text style={styles.buttonText}>{secretPhraseText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={onLogoutPress}
                >
                    <Text style={styles.logoutButtonText}>{logoutText}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(LeftSideMenu);
