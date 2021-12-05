import React, { useCallback } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { SvgIcon } from 'appComponents/core';
import { actionCreators } from 'appApi';

import styles from './styles';


interface SideBarButtonPropTypes {
}

function SideBarButton({
}: SideBarButtonPropTypes) {
    const dispatch = useDispatch();
    const dispatchUpdateCyptoList = useCallback(() => {
        dispatch(actionCreators.updateCryptoList());
    }, [ dispatch ]);

    return (
        <SvgIcon
            name="side-bar"
            fill="none"
            width={44}
            height={44}
            iconSet="symbol"
            onPress={dispatchUpdateCyptoList}
            isTouchable
        />
    );
}


export default React.memo(SideBarButton);
