import styled from 'styled-components/native';
import { IMaskTextInput } from 'react-native-imask';
import { getBottomSpace } from 'react-native-iphone-x-helper';

interface CABProps {
  isAvoidingKeyboard: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 5px;
`;

export const InputContainer = styled.View`
  padding: 0 15px;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 22px;
  color: #2a2a2a;
  font-weight: 500;
`;

export const Input = styled.TextInput`
  font-size: 24px;
  font-weight: 400;
  color: #626262;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const MaskInput = styled(IMaskTextInput)`
  font-size: 24px;
  font-weight: 400;
  color: #626262;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const CreateAccountButton = styled.TouchableHighlight<CABProps>`
  border-top-width: 1px;
  border-top-color: #2a2a2a;
  align-items: center;
  justify-content: center;
  padding: 16px 0
    ${(props) => 16 + (props.isAvoidingKeyboard ? 0 : getBottomSpace())}px;
`;

export const CreateAccountButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: #2a2a2a;
`;
