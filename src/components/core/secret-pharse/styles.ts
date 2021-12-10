import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    secretPhrase: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.CORAL_BLACK,
        borderRadius: 10,
        paddingVertical: 10,
        backgroundColor: colors.GHOST_WHITE,
    },

    secretPhraseColumnsContrainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    secretPhraseColumn: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 16,
    },

    word: {
        color: colors.CORAL_BLACK,
        fontSize: 14,
        lineHeight: 17,
        fontFamily: fonts.REGULAR,
        marginVertical: 6,
    },

    QRcontainer: {
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        marginHorizontal: 16,
    },

    logo: {
        color: colors.CORAL_BLACK,
        fontSize: 16,
        fontFamily: fonts.MEDIUM,
    },
});
