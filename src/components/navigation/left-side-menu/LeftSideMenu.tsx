import React, { useState, useCallback } from 'react';
import { Text, SafeAreaView } from 'react-native';

import styles from './styles';

interface LeftSideMenuPropTypes {
    componentId: string;
}

function LeftSideMenu({ componentId }: LeftSideMenuPropTypes) {
    return (
        <SafeAreaView style={styles.screen}>
            <Text>Side Menu</Text>
        </SafeAreaView>
    );
}

export default React.memo(LeftSideMenu);
