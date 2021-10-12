import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';

interface GetStartedScreenPropTypes {}

function GetStartedScreen({}: GetStartedScreenPropTypes) {
  return <SafeAreaView style={styles.screen} />;
}

export default React.memo(GetStartedScreen);
