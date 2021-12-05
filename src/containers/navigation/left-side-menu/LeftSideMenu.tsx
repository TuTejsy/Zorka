import React, { } from 'react';
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
