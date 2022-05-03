import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.CORAL_BLACK,
        paddingHorizontal: 16,
    },
    scrollView: {
        backgroundColor: colors.CORAL_BLACK,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 20,
    },

    balanceContainer: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'flex-start',
        paddingVertical: 16,
        backgroundColor: colors.CORAL_BLACK,
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
        marginBottom: 50,
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
    },

    transactionsContainer: {
        marginTop: 90,
        justifyContent: 'center',
    },

    sendButton: {
        width: Screen.width * 0.7,
        height: 60,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GREEN,
        paddingHorizontal: 15,
    },
    transactionsButton: {
        width: Screen.width * 0.7,
        height: 60,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GHOST_WHITE,
        paddingHorizontal: 15,
    },
    transactionsText: {
        color: colors.BLACK,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: fonts.REGULAR,
    },

    CreateZorkaWalletContainer: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 150,
        justifyContent: 'center',
    },
    CreateZorkaWalletText: {
        color: colors.GHOST_WHITE,
        fontSize: 21,
        fontFamily: fonts.REGULAR,
        marginBottom: 50,
    },
});
