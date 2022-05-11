import React, { useMemo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

import styles, { useContextualStyles } from './styles';

interface CryptoCurrencyPreviewPropTypes {
    id: string,
    name: string,
    price: number,
    amount: number,
    prevPrice: number,
    totalPrice: number,

    onPress: () => void,

    logoURL?: string,
}

function CryptoCurrencyPreview({
    id,
    name,
    price,
    amount,
    prevPrice,
    totalPrice,

    onPress,

    logoURL,
}: CryptoCurrencyPreviewPropTypes) {
    const extention = useMemo(() => logoURL?.split('.').pop(), [ logoURL ]);
    const isSVG = extention === 'svg';

    const priceDiff = useMemo(
        () => (prevPrice - price),
        [prevPrice, price]
    );

    const contextualStyles = useContextualStyles({ priceDiff });

    const priceLabel = useMemo(
        () => `$${Math.round(price * 1000) / 1000}`,
        [ price ]
    );
    const totalPriceLabel = useMemo(
        () => `$${Math.round(totalPrice * 1000) / 1000}`,
        [ totalPrice ]
    );

    return (
        <TouchableOpacity
            style={styles.preview}
            onPress={onPress}
        >
            <View
                style={styles.logo}
            >
                { logoURL && (
                    isSVG ? (
                    <SvgUri
                        uri={logoURL}
                        width="100%"
                        style={styles.logo}
                        height="100%"
                    />
                    ) : (
                        <Image
                            source={{ uri: logoURL }}
                            style={styles.logo}
                            resizeMode="cover"
                        />
                    )
                )}
            </View>

            <View style={styles.content}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.amount}>{id} {amount}</Text>
                </View>

                <View
                    style={styles.priceContainer}
                >
                    <Text style={contextualStyles.price}>{priceLabel}</Text>
                    <Text style={styles.totalPrice}>{totalPriceLabel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default React.memo(CryptoCurrencyPreview);
