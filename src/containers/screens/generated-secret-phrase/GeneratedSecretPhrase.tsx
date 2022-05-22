import React, { useRef, useCallback } from 'react';
import { Share } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import ViewShot, { captureRef } from 'react-native-view-shot';

import { useActions, useLocalizedStrings } from 'appHooks';
import { LOCALIZATION } from 'appConstants';
import { ToastEmitter } from 'appEmitters';
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
        copiedToastrText,
    ] = useLocalizedStrings([
        LOCALIZATION.TOASTR.COPIED,
    ]);

    const [
        createZorkaWallet,
    ] = useActions<[
        ACTION_CREATORS_TYPES['createZorkaWallet'],
    ]>([
        'createZorkaWallet',
    ]);


    const dispatchCreateZorkaWallet = useCallback(() => {
        createZorkaWallet({
            secretPhrase,
        });
    }, [createZorkaWallet, secretPhrase]);

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

    const handleCopySecretPhrase = useCallback(() => {
        Clipboard.setString(secretPhrase);

        ToastEmitter.showToast({
            text: copiedToastrText,
            isSuccess: true,
        });
    }, [secretPhrase, copiedToastrText]);

    return (
        <GeneratedSecretPhraseScreen
            componentId={componentId}
            onDonePress={handleDonePress}
            secretPhrase={secretPhrase}
            secretPhraseRef={secretPhraseRef}
            onCopySecretPhrasePress={handleCopySecretPhrase}
            onSaveSecretPharsePress={handleSaveSecretPhrasePress}
        />
    );
}

export default React.memo(GeneratedSecretPhraseScreenContainer);
