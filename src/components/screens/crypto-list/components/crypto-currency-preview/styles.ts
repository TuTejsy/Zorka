import { StyleSheet } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    preview: {
        flex: 1,
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 16,
    },

    logo: {
        width: 40,
        height: 40,
        marginRight: 20,
    },

    name: {
        fontSize: 14,
        fontFamily: fonts.REGULAR,
    }
});
