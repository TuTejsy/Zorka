import { useMemo } from 'react';
import { ViewStyle, StyleProp, StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    inputsColumn: {
        flex: 1,
        width: '30%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'flex-start',
    },
    inputIndex: {
        color: colors.GHOST_WHITE,
        width: 25,
        fontSize: 14,
        textAlign: 'left',
        fontFamily: fonts.REGULAR,
    },
    activeInputIndex: {
        color: colors.YELLOW,
    },
    input: {
        color: colors.GHOST_WHITE,
        width: '85%',
        fontSize: 16,
        fontFamily: fonts.REGULAR,
        borderRadius: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.GREY_70,
    },
    activeInput: {
        borderBottomColor: colors.YELLOW,
    }
});

export const useContextualStyles = ({
    style,
}: {
    style?: StyleProp<ViewStyle>;
}) => {
    const container: StyleProp<ViewStyle> = useMemo(
        () => StyleSheet.flatten([
            {
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: colors.CORAL_BLACK,
            },
            style,
        ]), [ style ]);

    return {
        container,
    };
};
