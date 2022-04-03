import React from 'react';
import { View } from 'react-native';

import { Toaster } from '../toaster';

import styles from './styles';

interface ToastProviderTypes {
    children?: JSX.Element;

    componentId: string,
}

function ToastProvider({
    children,

    componentId,
}: ToastProviderTypes) {
    return (
        <View style={styles.screen}>
            <Toaster componentId={componentId} />

            { children }
        </View>
    );
}

export default React.memo(ToastProvider);
