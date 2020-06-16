import React, { useState, useEffect, useCallback, useRef } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import MaskInput from '../../components/MaskInput';

import {
  Container,
  Header,
  // InputContainer,
  // Label,
  // Input,
  // MaskInput,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

interface NewAccountFormData {
  name: string;
  value: Number;
}

const NewAccount: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [isAvoidingKeyboard, setIsAvoidingKeyboard] = useState<boolean>(false);

  const handleKeyboardShow = useCallback(() => {
    // console.log('me chamou, mas não deveria', Keyboard.);
    setIsAvoidingKeyboard((prevIsAvoidingKeyboardState) => true);
  }, []);

  const handleKeyboardHide = useCallback(() => {
    // console.log('me chamou, mas não deveria', Keyboard.);
    setIsAvoidingKeyboard((prevIsAvoidingKeyboardState) => false);
  }, []);

  const handleSignIn = useCallback((data: NewAccountFormData) => {
    console.log(data);
  }, []);

  useEffect(() => {
    const keyboardWillHide = Keyboard.addListener(
      'keyboardWillHide',
      handleKeyboardHide,
    );

    const keyboardWillShow = Keyboard.addListener(
      'keyboardWillShow',
      handleKeyboardShow,
    );
    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, []);

  return (
    <>
      <Header>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="close" size={24} color="#22272b" />
        </TouchableWithoutFeedback>
      </Header>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Form
              ref={formRef}
              onSubmit={handleSignIn}
              initialData={{ name: 'Higo', value: 2212.11 }}
            >
              <Input label="Nome da nova conta" name="name" />
              <MaskInput
                type={'money'}
                label="Valor inicial"
                name="value"
                keyboardType="numeric"
              />
            </Form>
          </Container>
          <CreateAccountButton
            onPress={() => {
              formRef.current?.submitForm();
            }}
            isAvoidingKeyboard={isAvoidingKeyboard}
            underlayColor="#EDEDED"
          >
            <CreateAccountButtonText>Confirmar</CreateAccountButtonText>
          </CreateAccountButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default NewAccount;
