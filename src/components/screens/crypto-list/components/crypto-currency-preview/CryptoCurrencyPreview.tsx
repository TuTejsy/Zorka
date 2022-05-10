import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { LoadingCircle } from 'appComponents/core';

import styles from './styles';

interface CryptoCurrencyPreviewPropTypes {
    name: string,
    price: string,
    amount: number,

    onPress: () => void,

    logoURL?: string,
}

function CryptoCurrencyPreview({
    name,
    price,
    amount,

    onPress,

    logoURL,
}: CryptoCurrencyPreviewPropTypes) {
    return (
        <TouchableOpacity
            style={styles.preview}
            onPress={onPress}
        >
            <View
                style={styles.logo}
            >
                { logoURL && (
                    <SvgUri
                        uri={logoURL}
                        width="100%"
                        style={styles.logo}
                        height="100%"
                    />
                )}
            </View>

            <Text style={styles.name}>{name}</Text>

            <Text style={styles.amount}>{amount}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(CryptoCurrencyPreview);
