import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import formatValue from '../../utils/formatValue';

import {
  Container,
  AccountIcon,
  AccountContent,
  AccountTypeText,
  AccountTitleText,
} from './styles';

interface AccountProps {
  title: string;
  cash: number;
  type: 'bank' | 'wallet' | 'creditcard';
}

const Account: React.FC<AccountProps> = ({ title, cash, type }) => {
  return (
    <Container>
      <AccountIcon>
        <Icon name={type} size={40} color="rgba(255, 255, 255, 0.5)" />
      </AccountIcon>
      <AccountContent>
        <AccountTitleText>{title}</AccountTitleText>
        <AccountTypeText>{formatValue(cash)}</AccountTypeText>
      </AccountContent>
    </Container>
  );
};

export default Account;
