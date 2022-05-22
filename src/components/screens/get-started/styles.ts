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

    title: {
        color: colors.GHOST_WHITE,
        marginTop: Screen.height / 5,
        fontSize: 31,
        fontFamily: fonts.BOLD,
    },

    buttons: {
        marginBottom: Screen.height / 10,
    },

    CreateZorkaWalletButtonText: {
        color: colors.CORAL_BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
    CreateZorkaWalletButton: {
        width: Screen.width * 0.7,
        height: 60,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.YELLOW,
    },

    signInButton: {
        width: Screen.width * 0.7,
        height: 60,
        alignItems: 'center',
        borderColor: colors.CORAL_BLACK,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GHOST_WHITE,
    },
    signInButtonText: {
        color: colors.CORAL_BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
});
