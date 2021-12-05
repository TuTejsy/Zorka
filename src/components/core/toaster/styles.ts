
import { StyleSheet } from 'react-native';
import { Screen } from 'appUtils';
import { colors, fonts } from 'appAssets/styles';


export default StyleSheet.create({
    toast: {
        left: Screen.width * 0.2,
        width: Screen.width * 0.6,
        height: 50,
        zIndex: 500,
        bottom: 100,
        position: 'absolute',
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: colors.GHOST_WHITE,
    },

    toastText: {
        color: colors.BLACK,
        fontSize: 16,
        fontFamily: fonts.REGULAR,
    },
});
