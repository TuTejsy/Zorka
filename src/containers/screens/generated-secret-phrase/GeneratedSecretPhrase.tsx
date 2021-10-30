import React, { useRef, useCallback } from 'react';
import { Share } from 'react-native';
import ViewShot, { captureRef } from 'react-native-view-shot';

import { Generator } from 'appUtils';
import { GeneratedSecretPhraseScreen } from 'appComponents/screens';

interface GeneratedSecretPhraseScreenContainerPropTypes {
    secretPhrase: string;
}

function GeneratedSecretPhraseScreenContainer({
    secretPhrase,
}: GeneratedSecretPhraseScreenContainerPropTypes) {
    const secretPhraseRef = useRef<ViewShot>();

    const handleSaveSecretPhrasePress = useCallback(() => {
        captureRef(secretPhraseRef, {
            format: 'png',
            quality: 1,
        }).then(
            url => {
                Share.share({ url });
            },
            error => console.error('Snapshot failed', error),
        );
    }, []);

    return (
        <GeneratedSecretPhraseScreen
            secretPhrase={secretPhrase}
            secretPhraseRef={secretPhraseRef}
            onSaveSecretPharsePress={handleSaveSecretPhrasePress}
        />
    );
}

export default React.memo(GeneratedSecretPhraseScreenContainer);
