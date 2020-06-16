import React, {
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { TextInputMaskProps } from 'react-native-masked-text';

import { Container, Label, TextInput } from './styles';

interface InputProps extends TextInputMaskProps {
  name: string;
  label?: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<{}, InputProps> = (
  { name, label, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [inputValue, setInputValue] = useState(String(defaultValue));

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      getValue(ref) {
        return inputElementRef.current.getRawValue();
      },
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        setInputValue(value);
      },
      clearValue() {
        inputValueRef.current.value = '';
        setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextInput
        ref={inputElementRef}
        value={inputValue}
        onChangeText={setInputValue}
        keyboardAppearance="dark"
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
