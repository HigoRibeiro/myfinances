import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

import { useAccount } from '../../../hooks/account';
import Skeleton from './Skeleton';
import AccountCard from '../../../components/Account';

const Account: React.FC = () => {
  const { currentAccount, loading } = useAccount();

  const navigation = useNavigation();

  const handlePressNavigate = useCallback(() => {
    navigation.navigate('Account');
  }, []);

  if (loading || !currentAccount) {
    return <Skeleton />;
  }

  return (
    <TouchableOpacity onPress={handlePressNavigate}>
      <AccountCard
        title={currentAccount.title}
        cash={currentAccount.cash}
        type={currentAccount.type}
      />
    </TouchableOpacity>
  );
};

export default Account;
