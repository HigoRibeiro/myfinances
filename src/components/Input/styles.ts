import styled from 'styled-components/native';

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
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
`;

export const TextInput = styled.TextInput`
  font-size: 24px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  padding-top: 15px;
  padding-bottom: 15px;
`;
