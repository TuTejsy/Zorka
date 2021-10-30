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

    title: {
        color: colors.CORAL_BLACK,
        marginTop: Screen.height / 5,
        fontSize: 31,
        fontFamily: fonts.BOLD,
    },

    buttons: {
        marginBottom: Screen.height / 10,
    },

    createWalletButtonText: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
    createWalletButton: {
        width: Screen.width * 0.6,
        height: 45,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.YONDER_BLUE,
    },

    signInButton: {
        width: Screen.width * 0.6,
        height: 45,
        alignItems: 'center',
        borderColor: colors.YONDER_BLUE,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GHOST_WHITE,
    },
    signInButtonText: {
        color: colors.YONDER_BLUE,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
});
