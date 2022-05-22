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
        paddingVertical: 20,
        paddingHorizontal: 10,
    },

    uploadButton: {
        width: Screen.width * 0.6,
        height: 60,
        marginTop: 50,
        marginBottom: 50,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GREEN,
    },

    uploadText: {
        color: colors.BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
});
