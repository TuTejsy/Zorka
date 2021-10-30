import React, { useState, useCallback } from 'react';

import { CreateWalletScreen } from 'appComponents/screens';

interface CreateWalletScreenContainerPropTypes {}

function CreateWalletScreenContainer({}: CreateWalletScreenContainerPropTypes) {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerateSecretPhrasePress = useCallback(() => {
        setIsGenerating(true);
    }, []);

    return (
        <CreateWalletScreen
            isGenerating={isGenerating}
            onGenerateSecretPhrasePress={handleGenerateSecretPhrasePress}
        />
    );
}

export default React.memo(CreateWalletScreenContainer);
