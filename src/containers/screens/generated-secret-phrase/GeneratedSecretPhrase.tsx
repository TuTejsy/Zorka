import React, { useRef, useCallback } from 'react';
import { Share } from 'react-native';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { useDispatch } from 'react-redux';

import { actionCreators } from 'appApi';
import { GeneratedSecretPhraseScreen } from 'appComponents/screens';

interface GeneratedSecretPhraseScreenContainerPropTypes {
    componentId: string;
    secretPhrase: string;
}

function GeneratedSecretPhraseScreenContainer({
    componentId,
    secretPhrase,
}: GeneratedSecretPhraseScreenContainerPropTypes) {
    const dispatch = useDispatch();
    const dispatchCreateWallet = useCallback(() => {
        dispatch(
            actionCreators.createWallet({
                secretPhrase,
            }),
        );
    }, [dispatch, secretPhrase]);

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

    const handleDonePress = useCallback(() => {
        dispatchCreateWallet();
    }, [dispatchCreateWallet]);

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
