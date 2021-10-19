import React, { useCallback } from 'react';

import { GetStartedScreen } from 'appComponents/screens';

interface GetStartedScreenContainerPropTypes {}

function GetStartedScreenContainer({}: GetStartedScreenContainerPropTypes) {
    const handleSignInPress = useCallback(() => {}, []);
    const handleCreateWalletPress = useCallback(() => {}, []);

    return (
        <GetStartedScreen
            onSignInPress={handleSignInPress}
            onCreateWalletPress={handleCreateWalletPress}
        />
    );
}

export default React.memo(GetStartedScreenContainer);
