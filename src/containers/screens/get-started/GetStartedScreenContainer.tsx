import React from 'react';

import { GetStartedScreen } from 'appComponents/screens';

interface GetStartedScreenContainerPropTypes {}

function GetStartedScreenContainer({}: GetStartedScreenContainerPropTypes) {
  return <GetStartedScreen />;
}

export default React.memo(GetStartedScreenContainer);
