import { StyleSheet } from 'react-native';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: colors.CORAL_BLACK,
    },

    title: {
        color: colors.GHOST_WHITE,
        fontSize: 27,
        marginTop: 16,
        marginLeft: 16,
        fontFamily: fonts.MEDIUM,
    },

    buttonsContainer: {
        width: '100%',
        paddingHorizontal: 16,
    },
    button: {
        height: 50,
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GREY,
    },
    buttonText: {
        color: colors.BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
});
