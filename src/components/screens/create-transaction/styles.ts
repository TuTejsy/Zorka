import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.BLACK,
    },

    swipeIndicator: {
        width: 50,
        height: 3,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 3,
        backgroundColor: colors.GREY,
    },
});
