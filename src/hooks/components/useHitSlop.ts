import { useState, useCallback } from 'react';
import { Insets } from 'react-native';

const TOUCHABLE_AREA_MIN_SIZE = 44;

function useHitSlop(): [Insets, ({ nativeEvent: { layout } }: any) => void] {
    const [hitSlop, setHitSlop] = useState<Insets>({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    });

    const handleLayout = useCallback(
        ({ nativeEvent: { layout } }) => {
            const { width, height } = layout;

            const verticalHitSlop = height < TOUCHABLE_AREA_MIN_SIZE
                ? (TOUCHABLE_AREA_MIN_SIZE - height) / 2
                : 0;

            const horizontalHitSlop = width < TOUCHABLE_AREA_MIN_SIZE
                ? (TOUCHABLE_AREA_MIN_SIZE - width) / 2
                : 0;

            setHitSlop({
                top: verticalHitSlop,
                left: horizontalHitSlop,
                right: horizontalHitSlop,
                bottom: verticalHitSlop,
            });
        },
        [ setHitSlop ]
    );

    return [hitSlop, handleLayout];
}

export default useHitSlop;
