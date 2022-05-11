import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';

import { Animated, Text } from 'react-native';

import { ANIMATION_DURATION, TOAST_DURATION } from 'appConstants';
import { ToastEmitter } from 'appEmitters';
import { ValueHandler } from 'appUtils';

import styles, { useContextualStyles } from './styles';

interface ToasterTypes {
    componentId: string,
}

function Toaster({
    componentId,
}: ToasterTypes) {
    const toastTimeoutValueHandler = useMemo(() => (new ValueHandler<null | NodeJS.Timeout>(null)), []);
    const animatedOpacityRef = useRef(new Animated.Value(0));
    const animatedScaleRef = useRef(new Animated.Value(0));

    const [text, setText] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);

    const contextualStyles = useContextualStyles({ isSuccess, });

    const hideToaster = useCallback(
        () => {
            const timeout = toastTimeoutValueHandler.get();

            if (timeout) {
                clearTimeout(timeout);
            }

            Animated.timing(animatedOpacityRef.current, {
                toValue: 0,
                duration: ANIMATION_DURATION,
                useNativeDriver: true,
            }).start(() => {
                Animated.timing(animatedScaleRef.current, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                }).start();
            });
        },
        [ toastTimeoutValueHandler ],
    );

    const showToaster = useCallback(
        ({ text, isSuccess }: ToastPropTypes) => {
            setText(text);
            setIsSuccess(isSuccess);

            Animated.timing(animatedScaleRef.current, {
                toValue: 1,
                duration: 0,
                useNativeDriver: true,
            }).start(() => {
                Animated.timing(animatedOpacityRef.current, {
                    toValue: 1,
                    duration: ANIMATION_DURATION,
                    useNativeDriver: true,
                }).start(() => {
                    const timeout = setTimeout(hideToaster, TOAST_DURATION);
                    toastTimeoutValueHandler.set(timeout);
                });
            });
        },
        [hideToaster, toastTimeoutValueHandler],
    );

    useEffect(() => {
        ToastEmitter.subscribeOnToastShow(componentId, showToaster);

        return () => {
            ToastEmitter.cancellAllSubscriptions(componentId);
        };
    }, []);


    return (
        <Animated.View
            style={[
                contextualStyles.toast,
                {
                    opacity: animatedOpacityRef.current,
                    transform: [ { scale: animatedScaleRef.current } ]
                }
            ]}
        >
            <Text style={styles.toastText}>{text}</Text>
        </Animated.View>
    );
}

export default React.memo(Toaster);
