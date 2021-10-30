import React, { useRef, useMemo, useEffect } from 'react';

import { Animated, Easing, View } from 'react-native';
import Svg, {
    Defs,
    RadialGradient,
    LinearGradient,
    Stop,
    Circle,
} from 'react-native-svg';
import { ValueHandler } from 'appUtils';
import { ANIMATION_DURATION } from 'appConstants';

import styles from './styles';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ProgressCircleTypes {
    size: number;
    progress: number;
    children: any;
    strokeWidth: number;

    color?: string;
    hasBackground?: boolean;
    backgroundColor?: string;
}

function ProgressCircle({
    size,
    color,
    progress,
    children,
    strokeWidth,
    backgroundColor,
    hasBackground = true,
}: ProgressCircleTypes) {
    const lastProgressValueHandler = useMemo(
        () => new ValueHandler<number>(0),
        [],
    );
    const animatedProgressRef = useRef(
        new Animated.Value(Math.PI * 2 * (1 - progress)),
    );

    const [r, cx, cy, circumference] = useMemo(() => {
        const r = (size - strokeWidth) / 2;
        const cx = size / 2;
        const cy = size / 2;
        const circumference = r * 2 * Math.PI;

        return [r, cx, cy, circumference];
    }, [size, strokeWidth]);

    const strokeDashoffset = useMemo(
        () => Animated.multiply(animatedProgressRef.current, r),
        [r],
    );

    useEffect(() => {
        animatedProgressRef.current.stopAnimation();

        Animated.timing(animatedProgressRef.current, {
            toValue: Math.PI * 2 * (1 - lastProgressValueHandler.get()),
            duration: 0,
            useNativeDriver: false,
        }).start(() => {
            const animation = Animated.timing(animatedProgressRef.current, {
                easing: Easing.out(Easing.ease),
                toValue: Math.PI * 2 * (1 - progress),
                duration: ANIMATION_DURATION,
                useNativeDriver: false,
            });

            animation.start();

            lastProgressValueHandler.set(progress);
        });
    }, [progress, lastProgressValueHandler]);

    return (
        <View style={styles.container}>
            <Svg width={size} height={size} style={styles.svg}>
                <Defs>
                    <RadialGradient id="grad" cx="50%" cy="50%" r="75%">
                        <Stop
                            offset="0"
                            stopColor={'rgb(192,192,192)'}
                            stopOpacity={1}
                        />
                        <Stop
                            offset="0.7"
                            stopColor={'rgb(255,255,255)'}
                            stopOpacity={1}
                        />
                        <Stop
                            offset="0.75"
                            stopColor={'rgb(255,255,255)'}
                            stopOpacity={0.2}
                        />
                    </RadialGradient>
                    <LinearGradient
                        id="defaultGrad"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0.3">
                        <Stop
                            offset="0"
                            stopColor={'#0C5596'}
                            stopOpacity={1}
                        />
                        <Stop
                            offset="0.7"
                            stopColor={'#6EE9D7'}
                            stopOpacity={1}
                        />
                    </LinearGradient>
                </Defs>
                {hasBackground && (
                    <Circle
                        stroke={backgroundColor || 'url(#grad)'}
                        fill="none"
                        {...{
                            strokeWidth,
                            cx,
                            cy,
                            r,
                        }}
                    />
                )}
                <AnimatedCircle
                    r={r}
                    cx={cx}
                    cy={cy}
                    fill="none"
                    stroke={color || 'url(#defaultGrad)'}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference}, ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                />
            </Svg>

            <View style={styles.content}>{children}</View>
        </View>
    );
}

export default React.memo(ProgressCircle);
