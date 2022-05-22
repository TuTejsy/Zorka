import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.CORAL_BLACK,
    },

    attentionContainer: {
        marginTop: 50,
        borderRadius: 20,
        paddingVertical: 16,
        backgroundColor: colors.GHOST_WHITE,
        marginHorizontal: 16,
        paddingHorizontal: 20,
    },

    attentionText: {
        color: colors.CORAL_BLACK,
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 21,
        fontFamily: fonts.REGULAR,
    },

    generateSecretPhraseContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    generateTextContainer: {
        flex: 1,
        width: Screen.width * 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    generateText: {
        color: colors.CORAL_BLACK,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 21,
        fontFamily: fonts.MEDIUM,
    },

    loadingCirlce: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.GREEN,
    },

    generateSecretPhraseButton: {
        width: Screen.width * 0.6,
        height: Screen.width * 0.6,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: colors.GHOST_WHITE,
        borderRadius: Screen.width * 0.3,
        justifyContent: 'center',
        backgroundColor: colors.GREEN,
    },
});
