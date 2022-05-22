import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'space-between',
        backgroundColor: colors.CORAL_BLACK,
    },

    attentionContainer: {
        borderRadius: 20,
        paddingVertical: 16,
        backgroundColor: colors.BLACK,
        marginHorizontal: 16,
        paddingHorizontal: 20,
    },

    attentionText: {
        color: colors.ORANGE_RED,
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 21,
        fontFamily: fonts.REGULAR,
    },

    generateSecretPhraseContainer: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },

    generateTextContainer: {
        top: Screen.width * 0.25,
        left: 0,
        flex: 1,
        width: Screen.width * 0.5,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: Screen.width * 0.5,
        height: Screen.width * 0.5,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: colors.GHOST_WHITE,
        borderRadius: Screen.width * 0.25,
        justifyContent: 'center',
        backgroundColor: colors.GREEN,
    },
});
