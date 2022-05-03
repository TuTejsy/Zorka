import React, { useRef, useCallback } from 'react';
import { Share } from 'react-native';
import ViewShot, { captureRef } from 'react-native-view-shot';

import { useActions } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';
import { BackupScreen } from 'appComponents/screens';

interface BackupScreenContainerPropTypes {
    componentId: string;
    secretPhrase: string;
}

function BackupScreenContainer({
    componentId,
    secretPhrase,
}: BackupScreenContainerPropTypes) {
    const [
        saveBackup,
    ] = useActions<[
        ACTION_CREATORS_TYPES['saveBackup'],
    ]>([
        'saveBackup',
    ]);

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

    return (
        <BackupScreen
            componentId={componentId}
            secretPhrase={secretPhrase}
            secretPhraseRef={secretPhraseRef}
            onSaveBackupPress={saveBackup}
            onSaveSecretPharsePress={handleSaveSecretPhrasePress}
        />
    );
}

export default React.memo(BackupScreenContainer);
