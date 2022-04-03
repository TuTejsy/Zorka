import React, { useCallback } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { SvgIcon } from 'appComponents/core';
import { useActions } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';

import styles from './styles';


interface UpdateCryptoListButtonPropTypes {
}

function UpdateCryptoListButton({
}: UpdateCryptoListButtonPropTypes) {
    const [
        updateCryptoList,
    ] = useActions<[
        ACTION_CREATORS_TYPES['updateCryptoList'],
    ]>([
        'toggleSideBar',
    ]);

    return (
        <SvgIcon
            name="reload"
            fill="none"
            width={44}
            height={44}
            iconSet="symbol"
            onPress={updateCryptoList}
            isTouchable
        />
    );
}


export default React.memo(UpdateCryptoListButton);
