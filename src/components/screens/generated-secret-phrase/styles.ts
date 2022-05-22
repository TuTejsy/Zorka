import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        backgroundColor: colors.CORAL_BLACK,
    },

    secretPhraseContainer: {
        width: Screen.width - 48,
    },

    copySecretPhraseButton: {
        width: Screen.width * 0.8,
        height: 60,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GREEN,
    },
    saveButton: {
        width: Screen.width * 0.8,
        height: 60,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.YELLOW,
    },

    saveText: {
        color: colors.BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
});
