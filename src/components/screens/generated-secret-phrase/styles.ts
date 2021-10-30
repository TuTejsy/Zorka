import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.GHOST_WHITE,
    },

    secretPhraseContainer: {
        width: Screen.width - 48,
    },

    saveButton: {
        width: Screen.width * 0.6,
        height: 45,
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.LIGHT_BLUE,
    },

    saveText: {
        color: colors.WHITE,
        fontSize: 16,
        fontFamily: fonts.MEDIUM,
    },
});
