import styled from 'styled-components/native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: rgb(47, 52, 55);
`;

export const Header = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${isIphoneX() ? 50 : 0}px;
  padding-right: 25px;
  padding-left: 25px;
  margin-bottom: 45px;
`;

export const HeaderTitle = styled.Text`
  color: rgba(255, 255, 255, 0.9);
  font-size: 24px;
  font-weight: bold;
`;

export const Content = styled.View`
  padding: 0 25px;
  margin-bottom: 45px;
`;

export const Title = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 35px;
`;

export const Registers = styled(FlatList)`
  max-height: 180px;
  min-height: 180px;
`;

export const ChartArea = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
