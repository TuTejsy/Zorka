import React, { useMemo, useEffect } from 'react';

import { Animated, Easing, View, ViewStyle } from 'react-native';
import Svg, {
    Defs,
    RadialGradient,
    LinearGradient,
    Stop,
    Circle,
} from 'react-native-svg';

import styles, { useContextualStyles } from './styles';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface LoadingCircleTypes {
    size: number;
    children: any;
    strokeWidth: number;

    color?: string;
    style?: ViewStyle;
    hasBackground?: boolean;
    backgroundColor?: string;
}

function LoadingCircle({
    size,
    color,
    style,
    children,
    strokeWidth,
    backgroundColor,
    hasBackground = true,
}: LoadingCircleTypes) {
    const contextualStyles = useContextualStyles({ size, style });
    const animatedProgress = useMemo(() => new Animated.Value(Math.PI * 2), []);
    const animatedRotation = useMemo(() => new Animated.Value(0), []);

    const spinAnimation = animatedRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const [r, cx, cy, circumference] = useMemo(() => {
        const r = (size - strokeWidth) / 2;
        const cx = size / 2;
        const cy = size / 2;
        const circumference = r * 2 * Math.PI;

        return [r, cx, cy, circumference];
    }, [size, strokeWidth]);

    const strokeDashoffset = useMemo(
        () => Animated.multiply(animatedProgress, r),
        [animatedProgress, r],
    );

    useEffect(() => {
        const progressAnimation = Animated.loop(
            Animated.timing(animatedProgress, {
                easing: Easing.inOut(Easing.ease),
                toValue: -Math.PI * 2,
                duration: 3000,
                useNativeDriver: false,
            }),
        );

        const spinAnimtaion = Animated.loop(
            Animated.timing(animatedRotation, {
                easing: Easing.linear,
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
        );

        const parallelAnimation = Animated.parallel([
            progressAnimation,
            spinAnimtaion,
        ]);

        parallelAnimation.start();

        return () => {
            parallelAnimation.stop();
        };
    }, [animatedProgress, animatedRotation]);

    return (
        <View style={contextualStyles.container}>
            <Animated.View style={{ transform: [{ rotate: spinAnimation }] }}>
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
            </Animated.View>

            <View style={contextualStyles.content}>{children}</View>
        </View>
    );
}

export default React.memo(LoadingCircle);
