import React, { useState, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Month, MonthText } from './styles';

const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

interface MonthBarProps {
  onMonth?(month: string): void;
  onDoubleSelectMonth?(month: string): void;
}

const MonthBar: React.FC<MonthBarProps> = ({
  onMonth,
  onDoubleSelectMonth,
}) => {
  const [activated, setActivated] = useState('');

  const renderItemFromItemList: ListRenderItem<string> = useCallback(
    ({ item }) => (
      <Month
        activated={item === activated}
        onPress={() => {
          if (activated === item) {
            if (onMonth) {
              onDoubleSelectMonth(item);
            }
          }
          if (onMonth) {
            onMonth(item);
          }
          setActivated(item);
        }}
      >
        <MonthText activated={item === activated}>{item}</MonthText>
      </Month>
    ),
    [activated],
  );

  return (
    <FlatList
      style={{
        backgroundColor: '#f1f1f1',
        paddingTop: 10,
        paddingBottom: 10 + getBottomSpace(),
      }}
      pagingEnabled
      data={months}
      renderItem={renderItemFromItemList}
      keyExtractor={(item) => item}
      contentContainerStyle={{ paddingLeft: 25 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MonthBar;
