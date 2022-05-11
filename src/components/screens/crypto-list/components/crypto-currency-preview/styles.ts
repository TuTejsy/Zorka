import { useMemo } from 'react';
import { StyleSheet, StyleProp, TextStyle } from 'react-native';

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
    totalPrice: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        fontFamily: fonts.MEDIUM,
    }
});

export const useContextualStyles = ({
    priceDiff,
}: {
    priceDiff: number;
}) => {
    const price: StyleProp<TextStyle> = useMemo(
        () => {
            let color: string;

            if (priceDiff > 0) {
                color = colors.GREEN;
            } else if (priceDiff < 0) {
                color = colors.ORANGE_RED;
            } else {
                color = colors.GHOST_WHITE;
            }

            return ({
                color,
                fontSize: 14,
                fontFamily: fonts.REGULAR,
            });
        }, [ priceDiff ]);

    return {
        price
    };
};
