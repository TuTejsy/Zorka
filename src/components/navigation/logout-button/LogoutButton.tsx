import React, { useCallback } from 'react';

import { SvgIcon } from 'appComponents/core';
import { useActions } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';

import styles from './styles';


interface LogoutButtonPropTypes {
}

function LogoutButton({
}: LogoutButtonPropTypes) {
    const [
        updateCryptoList,
    ] = useActions<[
        ACTION_CREATORS_TYPES['updateCryptoList'],
    ]>([
        'updateCryptoList',
    ]);

    return (
        <SvgIcon
            name="logout"
            fill="none"
            width={44}
            height={44}
            iconSet="symbol"
            onPress={updateCryptoList}
            isTouchable
        />
    );
}


export default React.memo(LogoutButton);
