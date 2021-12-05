import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.GHOST_WHITE,
    },

    generateSecretPhraseContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    generateTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    generateText: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: fonts.MEDIUM,
    },

    loadingCirlce: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.YELLOW,
    },

    generateSecretPhraseButton: {
        width: Screen.width * 0.6,
        height: Screen.width * 0.6,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: colors.GHOST_WHITE,
        borderRadius: Screen.width * 0.3,
        justifyContent: 'center',
        backgroundColor: colors.YELLOW,
    },
});
