import React, { useRef, useCallback } from 'react';
import { Share } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import ViewShot, { captureRef } from 'react-native-view-shot';

import { LOCALIZATION } from 'appConstants';
import { useLocalizedStrings } from 'appHooks';

import { ToastEmitter } from 'appEmitters';
import { BackupScreen } from 'appComponents/screens';

interface BackupScreenContainerPropTypes {
    componentId: string;
    secretPhrase: string;
}

function BackupScreenContainer({
    componentId,
    secretPhrase,
}: BackupScreenContainerPropTypes) {
    const secretPhraseRef = useRef<ViewShot>();

    const [
        copiedToastrText,
    ] = useLocalizedStrings([
        LOCALIZATION.TOASTR.COPIED,
    ]);

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

    const handleCopySecretPhrase = useCallback(() => {
        Clipboard.setString(secretPhrase);

        ToastEmitter.showToast({
            text: copiedToastrText,
            isSuccess: true,
        });
    }, [secretPhrase, copiedToastrText]);

    return (
        <BackupScreen
            componentId={componentId}
            secretPhrase={secretPhrase}
            secretPhraseRef={secretPhraseRef}
            onCopySecretPhrasePress={handleCopySecretPhrase}
            onSaveSecretPharsePress={handleSaveSecretPhrasePress}
        />
    );
}

export default React.memo(BackupScreenContainer);
