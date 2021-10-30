import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Options } from 'react-native-navigation';

import { actionCreators } from 'appApi';
import { Generator } from 'appUtils';
import { NAVIGATION } from 'appConstants';
import { CryptoListScreen } from 'appComponents/screens';

interface CryptoListScreenContainerPropTypes {
    componentId: string;
}

function CryptoListScreenContainer({
    componentId,
}: CryptoListScreenContainerPropTypes) {
    const dispatch = useDispatch();
    const dispatchPush = useCallback(
        ({
            passProps,
            screenName,
            screenOptions,
        }: {
            passProps: any;
            screenName: string;
            screenOptions?: Options;
        }) => {
            dispatch(
                actionCreators.push({
                    passProps,
                    screenName,
                    componentId,
                    screenOptions,
                }),
            );
        },
        [componentId, dispatch],
    );

    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerateSecretPhrasePress = useCallback(() => {
        setIsGenerating(true);

        Generator.passphrase().then((secretPhrase: string) => {
            setTimeout(() => {
                dispatchPush({
                    screenName: NAVIGATION.SCREENS.AUTH.GENERATED_SECRET_PHRASE,
                    passProps: {
                        secretPhrase,
                    },
                });

                setIsGenerating(false);
            }, 1500);
        });
    }, [dispatchPush]);

    return (
        <CryptoListScreen
            isGenerating={isGenerating}
            onGenerateSecretPhrasePress={handleGenerateSecretPhrasePress}
        />
    );
}

export default React.memo(CryptoListScreenContainer);
