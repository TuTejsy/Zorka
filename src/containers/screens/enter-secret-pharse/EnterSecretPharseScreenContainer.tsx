import React, { useCallback } from 'react';
import RNQRGenerator from 'rn-qr-generator';
import DocumentPicker from 'react-native-document-picker';

import { useActions } from 'appHooks';
import { EnterSecretPharseScreen } from 'appComponents/screens';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';

interface EnterSecretPharseScreenContainerPropTypes {
    componentId: string;
}

function EnterSecretPharseScreenContainer({
    componentId,
}: EnterSecretPharseScreenContainerPropTypes) {
    const [
        enterSecretPhrase,
    ] = useActions<[
        ACTION_CREATORS_TYPES['enterSecretPhrase'],
    ]>([
        'enterSecretPhrase',
    ]);

    const handleEnterSecretPhrase = useCallback((secretPhrase: string) => {
        enterSecretPhrase({ secretPhrase });
    }, [ enterSecretPhrase ]);

    const handleUploadSecretPhrasePress = useCallback(() => {
        DocumentPicker.pickSingle().then(({ uri }) => {
            RNQRGenerator.detect({ uri }).then(({ values }) => {
                const secretPhrase = values[0];
                console.log(secretPhrase);

                handleEnterSecretPhrase(secretPhrase);
            });
        });
    }, [ handleEnterSecretPhrase ]);

    return (
        <EnterSecretPharseScreen
            componentId={componentId}
            onSubmitSecretPhrase={handleEnterSecretPhrase}
            onUploadSecretPhrasePress={handleUploadSecretPhrasePress}
        />
    );
}

export default React.memo(EnterSecretPharseScreenContainer);
