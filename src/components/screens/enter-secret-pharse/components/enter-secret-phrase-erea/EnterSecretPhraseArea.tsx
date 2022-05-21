import React, { useState, useMemo, useCallback, RefObject } from 'react';
import { View, Text, TextInput, ViewProps } from 'react-native';
import ContextMenu from 'react-native-context-menu-view';
import Clipboard from '@react-native-clipboard/clipboard';

import { SECRETPHRASE_LENGTH } from 'appConstants';
import { colors } from 'appAssets/styles';

import styles, { useContextualStyles } from './styles';

interface InputValue {
    ref?: RefObject<TextInput>,
    value?: string,
    isActive?: boolean
}

interface EnterSecretPhraseAreaPropTypes extends ViewProps {
    isSecretPhraseValid: boolean

    onSubmitSecretPhrase: (secretPhrase: string) => void,
}

function EnterSecretPhraseArea({
    style,
    isSecretPhraseValid = true,

    onSubmitSecretPhrase
}: EnterSecretPhraseAreaPropTypes) {
    const contextualStyles = useContextualStyles({ style });

    const columns = useMemo(() => (new Array(3).fill(false)), []);
    const inputsInColumn = useMemo(
        () => (new Array(SECRETPHRASE_LENGTH / columns.length).fill(false)),
        [ columns.length ]
    );

    const [inputValues, setInputValues] = useState(
        () => (new Array<InputValue>(SECRETPHRASE_LENGTH)
            .fill({})
            .map(inputValue => ({
                ref: React.createRef<TextInput>(),
                value: '',
                isActive: false,
            }))
        )
    );

    const setValueForInput = useCallback((inputValue: InputValue, index: number) => {
        const newInputValues = [ ...inputValues ];
        newInputValues[index] = {
            ...newInputValues[index],
            ...inputValue,
        };

        setInputValues(newInputValues);
    }, [ inputValues ]);

    const handleFocus = useCallback((index: number) => {
        setValueForInput({
            isActive: true,
        }, index);
    }, [ setValueForInput ]);

    const handleBlur = useCallback((index: number) => {
        setValueForInput({
            isActive: false,
        }, index);
    }, [ setValueForInput ]);

    const handleValueChangeForInput = useCallback((value: string, index: number) => {
        setValueForInput({
            value: value.trim(),
        }, index);
    }, [ setValueForInput ]);

    const handleEnterPressForInput = useCallback((index: number) => {
        if (index === (inputValues.length - 1)) {
            const secretPhrase = inputValues.map(inputValue => inputValue.value).join(' ');

            onSubmitSecretPhrase(secretPhrase);
        } else {
            const inputValue = inputValues[index + 1];
            inputValue?.ref?.current?.focus();
        }
    }, [inputValues, onSubmitSecretPhrase]);

    const makeOnFocus = useCallback(index =>
        () => handleFocus(index),
    [ handleFocus ]
    );
    const makeOnBlur = useCallback(index =>
        () => handleBlur(index),
    [ handleBlur ]
    );
    const makeOnInputValueChange = useCallback(index =>
        (value:string) => handleValueChangeForInput(value, index),
    [ handleValueChangeForInput ]
    );
    const makeOnEnterPress = useCallback(index =>
        () => handleEnterPressForInput(index),
    [ handleEnterPressForInput ]
    );

    const handlePasteSecretPhrase = useCallback(async () => {
        const clipboardValue = await Clipboard.getString();
        const words = clipboardValue.trim().split(' ');

        const newInputValues = inputValues.map((inputValue, index) => ({
            ...inputValue,
            value: words[index].toUpperCase()
        }));

        setInputValues(newInputValues);

        newInputValues[newInputValues.length - 1].ref.current?.focus();
    }, [ inputValues ]);


    return (
        <ContextMenu
            actions={[ { title: 'Paste Secret Phrase' } ]}
            onPress={handlePasteSecretPhrase}
        >

            <View
                style={contextualStyles.container}
            >
                { columns.map((column, columnIndex) => (
                    <View
                        key={columnIndex}
                        style={styles.inputsColumn}
                    >
                        { inputsInColumn.map((input, inputIndex) => {
                            const inputValueIndex = columnIndex * inputsInColumn.length + inputIndex;
                            const inputValue = inputValues[inputValueIndex];
                            const isLastInput = inputValueIndex === inputValues.length - 1;

                            return (
                                <View
                                    key={inputValueIndex}
                                    style={styles.inputContainer}
                                >
                                    <Text
                                        style={[styles.inputIndex, inputValue.isActive && styles.activeInputIndex]}
                                    >
                                        { inputValueIndex + 1 }.
                                    </Text>

                                    <TextInput
                                        ref={inputValue.ref}
                                        style={[styles.input, inputValue.isActive && styles.activeInput]}
                                        value={inputValue.value}
                                        onBlur={makeOnBlur(inputValueIndex)}
                                        onFocus={makeOnFocus(inputValueIndex)}
                                        onChangeText={makeOnInputValueChange(inputValueIndex)}
                                        returnKeyType={isLastInput ? 'done' : 'next'}
                                        selectionColor={colors.YELLOW}
                                        onSubmitEditing={makeOnEnterPress(inputValueIndex)}
                                        contextMenuHidden
                                    />
                                </View>
                            );
                        })}
                    </View>
                ))}
            </View>
        </ContextMenu>);
}

export default React.memo(EnterSecretPhraseArea);
