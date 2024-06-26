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
    keyboardAvoidingContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    enterSecretPhraseArea: {
        marginBottom: 30,
        paddingVertical: Screen.isSmall ? 10 : 20,
        paddingHorizontal: 10,
    },

    uploadButton: {
        width: Screen.width * 0.6,
        height: Screen.isSmall ? 50 : 60,
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 30,
        marginBottom:  Screen.isSmall ? 20 : 50,
        justifyContent: 'center',
        backgroundColor: colors.GREEN,
    },

    uploadText: {
        color: colors.BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
});
