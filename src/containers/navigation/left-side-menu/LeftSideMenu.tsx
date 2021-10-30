import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Navigation, Options } from 'react-native-navigation';

import { actionCreators } from 'appApi';
import { NAVIGATION } from 'appConstants';
import { LeftSideMenu } from 'appComponents/navigation';

interface LeftSideMenuContainerPropTypes {
    componentId: string;
}

function LeftSideMenuContainer({
    componentId,
}: LeftSideMenuContainerPropTypes) {
    return <LeftSideMenu componentId={componentId} />;
}

export default React.memo(LeftSideMenuContainer);
