import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.BLACK,
    },

    flatList: {
        backgroundColor: colors.BLACK
    },
    separator: {
        width: '90%',
        height: 1,
        alignSelf: 'center',
        borderRadius: 1,
        backgroundColor: colors.CORAL_BLACK,
    },
});
