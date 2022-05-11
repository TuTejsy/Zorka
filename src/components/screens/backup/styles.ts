import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.CORAL_BLACK,
    },

    secretPhraseContainer: {
        width: Screen.width - 48,
    },

    copySecretPhraseButton: {
        width: Screen.width * 0.6,
        height: 50,
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GREEN,
    },

    saveSecretPharseButton: {
        width: Screen.width * 0.6,
        height: 50,
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
