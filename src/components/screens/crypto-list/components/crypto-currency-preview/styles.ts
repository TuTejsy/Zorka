import { StyleSheet } from 'react-native';

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
        width: 50,
        height: 50,
        overflow: 'hidden',
        marginRight: 20,
        borderRadius: 25,
        paddingVertical: 5,
        backgroundColor: colors.GHOST_WHITE,
        paddingHorizontal: 10,
    },

    name: {
        color: colors.GHOST_WHITE,
        fontSize: 14,
        fontFamily: fonts.REGULAR,
    }
});
