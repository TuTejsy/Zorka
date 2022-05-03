import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.BLACK,
    },
    content: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
    },

    swipeIndicator: {
        width: 50,
        height: 3,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 3,
        backgroundColor: colors.GREY,
    },

    sendTitle: {
        color: colors.GHOST_WHITE,
        fontSize: 24,
        lineHeight: 31,
        fontFamily: fonts.MEDIUM,
    },
    text: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        lineHeight: 21,
        fontFamily: fonts.REGULAR,
    },
    amountToSendInput: {
        flex: 1,
        color: colors.WHITE,
        fontSize: 16,
        maxHeight: 40,
        fontFamily: fonts.MEDIUM,
        borderWidth: 1,
        borderColor: colors.GHOST_WHITE,
        borderRadius: 20,
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    reciverAddressInput: {
        flex: 1,
        color: colors.WHITE,
        fontSize: 16,
        maxHeight: 40,
        fontFamily: fonts.REGULAR,
        borderWidth: 1,
        borderColor: colors.GHOST_WHITE,
        borderRadius: 20,
        paddingHorizontal: 20,
    },
});
