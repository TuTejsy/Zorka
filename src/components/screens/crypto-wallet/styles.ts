import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.CORAL_BLACK,
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 20,
    },

    balanceContainer: {
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'flex-start',
        paddingVertical: 16,
        backgroundColor: colors.CORAL_BLACK,
        width: Screen.width * 0.8,
    },
    balanceTitle: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        fontFamily: fonts.MEDIUM,
        marginBottom: 10,
    },
    balance: {
        color: colors.GHOST_WHITE,
        fontSize: 24,
        fontFamily: fonts.BOLD,
    },

    publicAddressContainer: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    publicAddressTitle: {
        color: colors.GREY,
        fontSize: 16,
        alignSelf: 'flex-start',
        fontFamily: fonts.REGULAR,
    },
    publicAddress: {
        color: colors.GREY,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
        marginBottom: 100,
    },
    button: {
        width: Screen.width * 0.5,
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.YELLOW,
    },
    buttonText: {
        color: colors.BLACK,
        fontSize: 14,
        fontFamily: fonts.REGULAR,
    }
});
