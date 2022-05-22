import React, { useState, useCallback } from 'react';
import { Options } from 'react-native-navigation';

import { Generator } from 'appUtils';
import { NAVIGATION } from 'appConstants';
import { useActions } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';
import { CreateWalletScreen } from 'appComponents/screens';

interface CreateWalletScreenContainerPropTypes {
    componentId: string;
}

function CreateWalletScreenContainer({
    componentId,
}: CreateWalletScreenContainerPropTypes) {
    const [
        push,
    ] = useActions<[
        ACTION_CREATORS_TYPES['push'],
    ]>([
        'push',
    ]);

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
            push({
                passProps,
                screenName,
                componentId,
                screenOptions,
            });
        },
        [componentId, push],
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
    }, [ dispatchPush ]);

    return (
        <CreateWalletScreen
            componentId={componentId}
            isGenerating={isGenerating}
            onGenerateSecretPhrasePress={handleGenerateSecretPhrasePress}
        />
    );
}

export default React.memo(CreateWalletScreenContainer);
