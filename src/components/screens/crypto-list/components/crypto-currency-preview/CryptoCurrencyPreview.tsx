import React, { useMemo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

import styles, { useContextualStyles } from './styles';

interface CryptoCurrencyPreviewPropTypes {
    id: string,
    name: string,
    price: string,
    amount: number,
    prevPrice: string,

    onPress: () => void,

    logoURL?: string,
}

function CryptoCurrencyPreview({
    id,
    name,
    price,
    amount,
    prevPrice,

    onPress,

    logoURL,
}: CryptoCurrencyPreviewPropTypes) {
    const extention = useMemo(() => logoURL?.split('.').pop(), [ logoURL ]);
    const isSVG = extention === 'svg';

    const priceDiff = useMemo(
        () => (Number(prevPrice) - Number(price)),
        [prevPrice, price]
    );

    const contextualStyles = useContextualStyles({ priceDiff });

    const priceLabel = useMemo(
        () => `$${Math.round(Number(price) * 1000) / 1000}`,
        [ price ]
    );
    const totalPriceLabel = useMemo(
        () => {
            const totalPrice = amount * Number(price);
            return `$${Math.round(totalPrice * 1000) / 1000}`;
        },
        [amount, price]
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
