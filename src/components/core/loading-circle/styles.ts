import { useMemo } from 'react';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';

export default StyleSheet.create({
    svg: {
        transform: [ { rotateZ: '270deg' } ],
    },
});

export const useContextualStyles = ({
    size,
    style,
}: {
    size: number;
    style?: ViewStyle;
}) => {
    const container: StyleProp<ViewStyle> = useMemo(
        () =>
            StyleSheet.flatten([
                {
                    position: 'relative',
                    borderRadius: size / 2,
                },
                style,
            ]),
        [style, size],
    );

    const content: StyleProp<ViewStyle> = useMemo(
        () => ({
            top: 0,
            left: -size / 3,
            width: '100%',
            height: '100%',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
        }),
        [ size ],
    );

    return {
        content,
        container,
    };
};
