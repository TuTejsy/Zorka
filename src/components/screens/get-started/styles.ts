import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.BLUE,
    },

    title: {
        color: colors.GREY,
        marginTop: Screen.height / 5,
        fontSize: 31,
        fontFamily: fonts.BOLD,
    },

    buttons: {
        marginBottom: Screen.height / 10,
    },

    createWalletButtonText: {
        color: colors.BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
    createWalletButton: {
        width: Screen.width * 0.6,
        height: 45,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GREY,
    },

    signInButton: {
        width: Screen.width * 0.6,
        height: 45,
        alignItems: 'center',
        borderColor: colors.GREY,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.LIGHT_BLUE,
    },
    signInButtonText: {
        color: colors.GREY,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
});
