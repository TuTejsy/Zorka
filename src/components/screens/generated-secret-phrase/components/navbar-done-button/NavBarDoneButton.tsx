import React from 'react';
import { Button } from 'react-native';

import { colors } from 'appAssets/styles';

interface NavBarDoneButtonPropTypes {
    title: string,

    onDonePress: () => void;
}

function NavBarDoneButton({
    title,

    onDonePress
}: NavBarDoneButtonPropTypes) {
    return (
        <Button
            color={colors.GHOST_WHITE}
            title={title}
            onPress={onDonePress}
        />
    );
}

export default NavBarDoneButton;
