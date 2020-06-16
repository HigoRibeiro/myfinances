import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AccountIcon = styled.View`
  height: 65px;
  width: 65px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
`;

export const AccountContent = styled.View``;
export const AccountTitleText = styled.Text`
  font-size: 20px;
  margin-bottom: 8px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.9);
`;

export const AccountTypeText = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 2px;
`;
