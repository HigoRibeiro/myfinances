import React, { useLayoutEffect, useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { View, FlatList } from 'react-native';
import {
  SelectBox,
  CheckIcon,
  RightMenu,
  CreateNewAccount,
  CreateNewAccountText,
} from './styles';

import { useAccount } from '../../hooks/account';
import Account from '../../components/Account';

const AccountPage: React.FC = () => {
  const { accounts, setCurrentAccount } = useAccount();
  const navigation = useNavigation();
  const [editMode, setEditMode] = useState<boolean>(false);

  const handlePressEditMode = useCallback(() => {
    setEditMode((prevEditMode) => !prevEditMode);
  }, []);

  const handleSelectBoxPress = useCallback(
    (title) => {
      if (!editMode) {
        setCurrentAccount(title);
      }
    },
    [editMode],
  );

  const handleCreateNewAccount = useCallback(() => {
    navigation.navigate('NewAccount');
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RightMenu onPress={handlePressEditMode}>
          <FeatherIcon name="edit" size={22} />
        </RightMenu>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      {editMode && (
        <CreateNewAccount onPress={handleCreateNewAccount}>
          <FeatherIcon name="plus" size={18} color="#a2a2a2" />
          <CreateNewAccountText>Criar uma nova conta</CreateNewAccountText>
        </CreateNewAccount>
      )}
      <FlatList
        data={accounts}
        renderItem={({ item: { title, cash, type, current } }) => (
          <SelectBox
            key={title}
            onPress={() => {
              handleSelectBoxPress(title);
            }}
          >
            <Account title={title} cash={cash} type={type} />
            {!editMode && (
              <CheckIcon>
                {current && <Icon name="check" size={26} />}
              </CheckIcon>
            )}
          </SelectBox>
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default AccountPage;
