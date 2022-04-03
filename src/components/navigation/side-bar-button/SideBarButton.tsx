import React, { useCallback } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { SvgIcon } from 'appComponents/core';
import { useActions } from 'appHooks';
import { ACTION_CREATORS_TYPES } from 'appHooks/types';

import styles from './styles';


interface SideBarButtonPropTypes {
    componentId: string,
}

function SideBarButton({
    componentId,
}: SideBarButtonPropTypes) {
    const [
        toggleSideBar,
    ] = useActions<[
        ACTION_CREATORS_TYPES['toggleSideBar'],
    ]>([
        'toggleSideBar',
    ]);

    const handleToggleSideBarPress = useCallback(
        () => {
            toggleSideBar({ visible: true });
        },
        [ toggleSideBar ],
    );

    return (
        <SvgIcon
            name="side-bar"
            fill="none"
            width={44}
            height={44}
            iconSet="symbol"
            onPress={handleToggleSideBarPress}
            isTouchable
        />
    );
}


export default React.memo(SideBarButton);
