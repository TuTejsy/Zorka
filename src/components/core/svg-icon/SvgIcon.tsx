import React from 'react';
import {
    ViewStyle,
    TouchableOpacity,
    GestureResponderEvent,
} from 'react-native';
// @ts-ignore
import RNSvg from 'react-native-svg-icon';

import { useHitSlop } from 'appHooks';

import { colors } from 'appAssets/styles';
import {
    SymbolIcons,
} from 'appAssets/icons';

const iconSets = {
    symbol: SymbolIcons,
};

interface SvgIconProps {
    name: string,
    iconSet: keyof typeof iconSets,

    fill?: string,
    color?: string,
    style?: ViewStyle,
    width?: number,
    height?: number,
    stroke?: string,
    onPress?: (event: GestureResponderEvent) => void,
    iconStyle?: ViewStyle,
    isTouchable?: boolean,
}

const SvgIcon = ({
    name,
    fill,
    color = colors.BLACK,
    width,
    style,
    height,
    stroke,
    onPress,
    iconSet,
    iconStyle,
    isTouchable = false,
}: SvgIconProps) => {
    const [hitSlop, handleLayout] = useHitSlop();

    return (
        <TouchableOpacity
            style={style}
            hitSlop={hitSlop}
            onPress={onPress}
            disabled={!isTouchable}
            onLayout={handleLayout}
        >
            <RNSvg
                name={name}
                fill={fill}
                svgs={iconSets[iconSet]}
                color={color}
                width={width}
                style={iconStyle}
                stroke={stroke}
                height={height}
            />
        </TouchableOpacity>
    );
};

export default React.memo(SvgIcon);
