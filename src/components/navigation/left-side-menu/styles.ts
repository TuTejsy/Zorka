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
        height: 60,
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GREY,
    },
    logoutButton: {
        height: 60,
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.ORANGE_RED,
    },
    buttonText: {
        color: colors.BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
    logoutButtonText: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },

    localizationContainer: {
        width: '100%',
        marginBottom: 50,
    },
    languageTitle: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
    languagePicker: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        // backgroundColor: colors.GREY,
    },
});
