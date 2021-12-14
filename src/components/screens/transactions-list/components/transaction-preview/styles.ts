import React, { useMemo } from 'react';

import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

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

    amountText: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        marginLeft: 10,
        fontFamily: fonts.MEDIUM,
    },

    date: {
        flex: 1,
        alignItems: 'flex-end',
    },

    dateText: {
        color: colors.GREY,
        fontSize: 12,
        fontFamily: fonts.REGULAR,
    },
});


export const useContextualStyles = ({
    isIncoming,
}: {
    isIncoming: boolean;
}) => {
    const incomingIndicator: StyleProp<ViewStyle> = useMemo(
        () => ({
            width: 4,
            height: '100%',
            borderRadius: 3,
            backgroundColor: isIncoming ? colors.GREEN : colors.ORANGE_RED,
        }),
        [ isIncoming ]);

    return {
        incomingIndicator,
    };
};
