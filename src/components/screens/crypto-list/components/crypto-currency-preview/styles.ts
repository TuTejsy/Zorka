import { StyleSheet } from 'react-native';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    preview: {
        flex: 1,
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 16,
    },

    logo: {
        width: 50,
        height: 50,
        overflow: 'hidden',
        marginRight: 20,
        borderRadius: 25,
        backgroundColor: colors.GHOST_WHITE,
    },

    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amount: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        fontFamily: fonts.MEDIUM,
    },
    name: {
        color: colors.GHOST_WHITE,
        fontSize: 14,
        fontFamily: fonts.REGULAR,
    },

    priceContainer: {
        alignItems: 'flex-end',
    },
    price: {
        color: colors.GHOST_WHITE,
        fontSize: 14,
        fontFamily: fonts.REGULAR,
    },
    totalPrice: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        fontFamily: fonts.MEDIUM,
    }
});
