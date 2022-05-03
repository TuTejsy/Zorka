import React, { useRef, useCallback } from 'react';
import { Share } from 'react-native';
import ViewShot, { captureRef } from 'react-native-view-shot';

import { useActions } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';
import { GeneratedSecretPhraseScreen } from 'appComponents/screens';

interface GeneratedSecretPhraseScreenContainerPropTypes {
    componentId: string;
    secretPhrase: string;
}

function GeneratedSecretPhraseScreenContainer({
    componentId,
    secretPhrase,
}: GeneratedSecretPhraseScreenContainerPropTypes) {
    const [
        CreateZorkaWallet,
    ] = useActions<[
        ACTION_CREATORS_TYPES['CreateZorkaWallet'],
    ]>([
        'CreateZorkaWallet',
    ]);


    const dispatchCreateZorkaWallet = useCallback(() => {
        CreateZorkaWallet({
            secretPhrase,
        });
    }, [CreateZorkaWallet, secretPhrase]);

    const secretPhraseRef = useRef<ViewShot>();

    const handleSaveSecretPhrasePress = useCallback(() => {
        captureRef(secretPhraseRef, {
            format: 'png',
            quality: 1,
        }).then(
            (url) => {
                Share.share({ url });
            },
            error => console.error('Snapshot failed', error),
        );
    }, []);

    const handleDonePress = useCallback(() => {
        dispatchCreateZorkaWallet();
    }, [ dispatchCreateZorkaWallet ]);

    return (
        <GeneratedSecretPhraseScreen
            componentId={componentId}
            onDonePress={handleDonePress}
            secretPhrase={secretPhrase}
            secretPhraseRef={secretPhraseRef}
            onSaveSecretPharsePress={handleSaveSecretPhrasePress}
        />
    );
}

export default React.memo(GeneratedSecretPhraseScreenContainer);
