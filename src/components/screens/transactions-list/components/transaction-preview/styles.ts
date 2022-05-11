import React, { useMemo } from 'react';

import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    transactionValueContainer: {
        maxWidth: '70%',
        marginLeft: 10,
    },
    amountContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    amountText: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
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
    confirmations: {
        color: colors.GREY,
        fontSize: 12,
        marginLeft: 5,
        fontFamily: fonts.REGULAR,
    },
    transactionAddress: {
        color: colors.GREY,
        fontSize: 11,
        marginLeft: 2,
        fontFamily: fonts.REGULAR,
    }
});


export const useContextualStyles = ({
    isIncoming,
    isConfirmed,
}: {
    isIncoming: boolean;
    isConfirmed: boolean;
}) => {
    const preview: StyleProp<ViewStyle> = useMemo(
        () => ({
            flex: 1,
            height: 70,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: isConfirmed ? colors.BLACK : colors.CORAL_BLACK,
            paddingVertical: 10,
            paddingHorizontal: 16,
        }), [ isConfirmed ]);

    const incomingIndicator: StyleProp<ViewStyle> = useMemo(
        () => ({
            width: 4,
            height: '100%',
            borderRadius: 3,
            backgroundColor: isIncoming ? colors.GREEN : colors.ORANGE_RED,
        }),
        [ isIncoming ]);

    return {
        preview,
        incomingIndicator,
    };
};
