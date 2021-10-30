import React from 'react';
import { Button } from 'react-native';

import { colors } from 'appAssets/styles';

interface NavBarDoneButtonPropTypes {
    onDonePress: () => void;
}

function NavBarDoneButton({ onDonePress }: NavBarDoneButtonPropTypes) {
    return (
        <Button title="Done" onPress={onDonePress} color={colors.GHOST_WHITE} />
    );
}

export default NavBarDoneButton;
