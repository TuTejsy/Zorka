import { useMemo } from 'react';
import { StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { Screen } from 'appUtils';

import { colors, fonts } from 'appAssets/styles';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.BLACK,
    },
    content: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    form: {
        alignItems: 'center',
    },

    swipeIndicator: {
        width: 50,
        height: 3,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 3,
        backgroundColor: colors.GREY,
    },

    text: {
        color: colors.GHOST_WHITE,
        fontSize: 16,
        lineHeight: 21,
        fontFamily: fonts.REGULAR,
    },
    inputTitleContainer: {
        alignItems: 'center',
        paddinRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    reciverAddressContainer: {
        width: Screen.width * 0.9,
        marginTop: 20,
        marginBottom: 5,
    },

    amountContainer: {
        width: Screen.width * 0.9,
        position: 'relative',
        marginTop: 10,
    },

    feeContainer: {
        width: Screen.width * 0.9,
        marginTop: 20,
        paddingRight: 5,
    },
    feeSliderContainer: {
        width: Screen.width * 0.8,
        marginTop: 10,
        alignSelf: 'center',
    },

    sendButtonText: {
        color: colors.CORAL_BLACK,
        fontSize: 16,
        fontFamily: fonts.MEDIUM,
    }
});

export const useContextualStyles = ({
    preference,
    isReadyToSend,
    maxLabelWidth,
    isMaxAmountReached,
    isReciverAddressValid,
}: {
    preference: Preference,
    isReadyToSend: boolean,
    maxLabelWidth: number,
    isMaxAmountReached: boolean,
    isReciverAddressValid: boolean,
}) => {
    const reciverAddressInput: StyleProp<TextStyle> = useMemo(
        () => ({
            color: colors.GHOST_WHITE,
            height: 40,
            fontSize: 14,
            fontFamily: fonts.REGULAR,
            borderWidth: 1,
            borderColor: isReciverAddressValid ? colors.GHOST_WHITE : colors.ORANGE_RED,
            borderRadius: 20,
            paddingHorizontal: 15,
        }), [ isReciverAddressValid ]);

    const amountToSendInput: StyleProp<TextStyle> = useMemo(
        () => ({
            color: colors.WHITE,
            height: 40,
            fontSize: 16,
            textAlign: 'center',
            fontFamily: fonts.REGULAR,
            borderWidth: 1,
            borderColor: isMaxAmountReached ? colors.ORANGE_RED : colors.GHOST_WHITE,
            paddingLeft: 20,
            paddingRight: 15 + maxLabelWidth,
            borderRadius: 20,
        }), [maxLabelWidth, isMaxAmountReached]);

    const maxAmount: StyleProp<TextStyle> = useMemo(
        () => ({
            color: isMaxAmountReached ? colors.ORANGE_RED : colors.GREEN,
            right: 10,
            bottom: 9,
            fontSize: 16,
            position: 'absolute',
            fontFamily: fonts.REGULAR,
        }), [ isMaxAmountReached ]);

    const preferenceText: StyleProp<TextStyle> = useMemo(
        () => {
            let color: string;

            switch(preference) {
                case 'low': {
                    color = colors.ORANGE_RED;
                    break;
                }
                case 'high': {
                    color = colors.GREEN;
                    break;
                }
                default: {
                    color = colors.GHOST_WHITE;
                    break;
                }
            }

            return ({
                color,
                fontSize: 16,
                fontFamily: fonts.MEDIUM,
            });
        } , [ preference ]);

    const sendButton: StyleProp<ViewStyle> = useMemo(
        () => ({
            width: Screen.width * 0.7,
            height: Screen.isSmall ? 50 : 60,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: isReadyToSend ? colors.GHOST_WHITE : colors.GREY,
            marginBottom: 40,
            borderRadius: 30,
            justifyContent: 'center',
            backgroundColor: isReadyToSend ? colors.GREEN : colors.GREY_80,
            paddingHorizontal: 15,
        }), [ isReadyToSend ]);

    return {
        maxAmount,
        sendButton,
        preferenceText,
        amountToSendInput,
        reciverAddressInput,
    };
};
