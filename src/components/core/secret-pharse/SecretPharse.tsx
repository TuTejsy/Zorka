import React, { useMemo, useCallback, useState } from 'react';
import { Text, View, LayoutChangeEvent } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { SECRETPHRASE_LENGTH } from 'appConstants';
import { colors } from 'appAssets/styles';

import styles from './styles';

interface SecretPhrasePropTypes {
    secretPhrase: string;
}

function SecretPhrase({ secretPhrase }: SecretPhrasePropTypes) {
    const secretPhraseArrays = useMemo(() => {
        const splittedSecretPhrase = secretPhrase.split(' ');
        const numberOfWordsInArray = SECRETPHRASE_LENGTH / 3;

        const arrayOfScretPharse = [
            splittedSecretPhrase.slice(0, numberOfWordsInArray),
            splittedSecretPhrase.slice(
                numberOfWordsInArray,
                2 * numberOfWordsInArray,
            ),
            splittedSecretPhrase.slice(
                2 * numberOfWordsInArray,
                SECRETPHRASE_LENGTH,
            ),
        ];

        return arrayOfScretPharse;
    }, [ secretPhrase ]);

    const [viewWidth, setViewWidth] = useState(0);

    const onViewLayout = useCallback((event: LayoutChangeEvent) => {
        setViewWidth(event.nativeEvent.layout.width);
    }, []);

    return (
        <View
            style={styles.secretPhrase}
            onLayout={onViewLayout}
        >
            <View style={styles.secretPhraseColumnsContrainer}>
                { secretPhraseArrays.map((secretWords, arrayIndex) => (
                    <View key={arrayIndex} style={styles.secretPhraseColumn}>
                        {secretWords.map((word, wordIndex) => (
                            <Text key={word} style={styles.word}>
                                {arrayIndex * 8 + wordIndex + 1}. {word}
                            </Text>
                        ))}
                    </View>
                ))}
            </View>

            <View style={styles.QRcontainer}>
                <Text style={styles.logo}>Zorka Wallet</Text>
                <QRCode
                    size={viewWidth * 0.4}
                    color={colors.ORANGE_RED}
                    value={secretPhrase}
                    backgroundColor={colors.GHOST_WHITE}
                />
            </View>
        </View>
    );
}

export default React.memo(SecretPhrase);
