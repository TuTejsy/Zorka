import React, { useRef, useCallback } from 'react';
import { Share } from 'react-native';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { useDispatch } from 'react-redux';

import { actionCreators } from 'appApi';
import { BackupScreen } from 'appComponents/screens';

interface BackupScreenContainerPropTypes {
    componentId: string;
    secretPhrase: string;
}

function BackupScreenContainer({
    componentId,
    secretPhrase,
}: BackupScreenContainerPropTypes) {
    const dispatch = useDispatch();

    const secretPhraseRef = useRef<ViewShot>();

    const handleSaveBackupPress = useCallback(
        () => {
            dispatch(actionCreators.saveBackup());
        },
        [ dispatch ],
    );

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
            onSaveBackupPress={handleSaveBackupPress}
            onSaveSecretPharsePress={handleSaveSecretPhrasePress}
        />
    );
}

export default React.memo(BackupScreenContainer);
