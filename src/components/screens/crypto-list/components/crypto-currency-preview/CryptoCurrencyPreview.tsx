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

    logoURL?: string,
}

function CryptoCurrencyPreview({
    name,
    price,

    logoURL,
}: CryptoCurrencyPreviewPropTypes) {
    return (
        <TouchableOpacity
            style={styles.preview}
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
        </TouchableOpacity>
    );
}

export default React.memo(CryptoCurrencyPreview);
