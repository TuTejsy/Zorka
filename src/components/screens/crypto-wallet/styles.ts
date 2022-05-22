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
        paddingTop: 50,
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
    balancePrice: {
        color: colors.GHOST_WHITE,
        fontSize: 21,
        fontFamily: fonts.REGULAR,
    },

    publicAddressContainer: {
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
        color: colors.YELLOW,
        fontSize: 16,
        alignSelf: 'flex-start',
        fontFamily: fonts.REGULAR,
    },
    transactionsContainer: {
        marginTop: 30,
        justifyContent: 'center',
    },
    sendButton: {
        width: Screen.width * 0.7,
        height: 60,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.YELLOW,
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
    createWalletButton: {
        width: Screen.width * 0.7,
        height: 60,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.YELLOW,
        paddingHorizontal: 15,
    },
    createWalletText: {
        color: colors.BLACK,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: fonts.REGULAR,
    },

    logo: {
        width: 200,
        height: 200,
        overflow: 'hidden',
        borderRadius: 100,
        backgroundColor: colors.GHOST_WHITE,
    },

    createZorkaWalletContainer: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 100,
        justifyContent: 'flex-start',
    },
    createZorkaWalletText: {
        color: colors.GHOST_WHITE,
        fontSize: 21,
        textAlign: 'center',
        marginTop: 50,
        fontFamily: fonts.REGULAR,
        marginBottom: 50,
    },
});
