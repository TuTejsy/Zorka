import React, { useState, useMemo, useCallback, RefObject } from 'react';
import { View, Text, TextInput, ViewBase, ViewProps } from 'react-native';
import { SECRETPHRASE_LENGTH } from 'appConstants';
import { colors } from 'appAssets/styles';

import styles, { useContextualStyles } from './styles';

interface InputValue {
    ref?: RefObject<TextInput>,
    value?: string,
    isActive?: boolean
}

interface EnterSecretPhraseAreaPropTypes extends ViewProps {
}

function EnterSecretPhraseArea({
    style
}: EnterSecretPhraseAreaPropTypes) {
    const contextualStyles = useContextualStyles({ style });

    const columns = useMemo(() => (new Array(3).fill(false)), []);
    const inputsInColumn = useMemo(
        () => (new Array(SECRETPHRASE_LENGTH / columns.length).fill(false)),
        [ columns.length ]
    );

    const [inputValues, setInputValues] = useState(
        () => (new Array<InputValue>(SECRETPHRASE_LENGTH).fill({
            ref: React.createRef(),
            value: '',
            isActive: false,
        }))
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

        } else {
            inputValues[index + 1].ref?.current?.focus();
        }
    }, [ inputValues ]);

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


    return (
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
                                key={inputIndex}
                                style={styles.inputContainer}
                            >
                                <Text
                                    key={inputIndex}
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
                                />
                            </View>
                        );
                    })}
                </View>
            ))}
        </View>);
}

export default React.memo(EnterSecretPhraseArea);
