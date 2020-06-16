import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View`
  padding: 0 15px;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 22px;
  color: #2a2a2a;
  font-weight: 500;
`;

export const TextInput = styled(TextInputMask)`
  font-size: 24px;
  font-weight: 400;
  color: #626262;
  padding-top: 15px;
  padding-bottom: 15px;
`;
