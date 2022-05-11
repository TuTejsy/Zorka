
import { useMemo } from 'react';
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';

import { Screen } from 'appUtils';
import { colors, fonts } from 'appAssets/styles';


export default StyleSheet.create({
    toastText: {
        color: colors.BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
});

export const useContextualStyles = ({
    isSuccess,
}: {
    isSuccess: boolean;
}) => {
    const toast: StyleProp<ViewStyle> = useMemo(
        () => ({
            top: 20,
            left: Screen.width * 0.2,
            width: Screen.width * 0.6,
            height: 50,
            zIndex: 500,
            position: 'absolute',
            alignItems: 'center',
            borderRadius: 30,
            justifyContent: 'center',
            backgroundColor: isSuccess ? colors.GHOST_WHITE : colors.ORANGE_RED,
        }),
        [ isSuccess ],
    );

    return {
        toast,
    };
};
