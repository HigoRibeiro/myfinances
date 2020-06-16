import styled from 'styled-components/native';

export const SelectBox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;
`;

export const CheckIcon = styled.View`
  width: 30px;
  margin-right: 5px;
`;

export const RightMenu = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const CreateNewAccount = styled.TouchableOpacity`
  margin: 10px 15px;
  border-radius: 4px;
  border-width: 3px;
  border-color: #efefef;
  border-style: dashed;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: row;
`;

export const CreateNewAccountText = styled.Text`
  margin-left: 8px;
  color: #a2a2a2;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
