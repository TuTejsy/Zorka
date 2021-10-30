import React, { useCallback } from 'react';

import { CreateWalletScreen } from 'appComponents/screens';

interface CreateWalletScreenContainerPropTypes {}

function CreateWalletScreenContainer({}: CreateWalletScreenContainerPropTypes) {
    const handleSignInPress = useCallback(() => {}, []);
    const handleCreateWalletPress = useCallback(() => {}, []);

    return (
        <CreateWalletScreen
            onSignInPress={handleSignInPress}
            onCreateWalletPress={handleCreateWalletPress}
        />
    );
}

export default React.memo(CreateWalletScreenContainer);
