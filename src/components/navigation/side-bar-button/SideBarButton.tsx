import React, { useCallback } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { Screen } from 'appUtils';
import { colors } from 'appAssets/styles';
import { SvgIcon } from 'appComponents/core';
import { actionCreators } from 'appApi';

import styles from './styles';
import { ToggleSideBarPayload } from 'api/types';


interface SideBarButtonPropTypes {
    componentId: string,
}

function SideBarButton({
    componentId,
}: SideBarButtonPropTypes) {
    const dispatch = useDispatch();
    const dispatchToggleSideBar = useCallback((props: ToggleSideBarPayload) => {
        dispatch(actionCreators.toggleSideBar(props));
    }, [ dispatch ]);

    const handleToggleSideBarPress = useCallback(
        () => {
            dispatchToggleSideBar({ visible: true });
        },
        [ dispatchToggleSideBar ],
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
