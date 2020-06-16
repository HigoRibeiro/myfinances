import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { useNavigation } from '@react-navigation/native';

import { ListRenderItem } from 'react-native';

import { useAccount } from '../../hooks/account';

import {
  Container,
  Header,
  HeaderTitle,
  Content,
  Title,
  Registers,
  ChartArea,
} from './styles';

import Register from './Register';
import MonthBar from './MonthBar';
import Account from './Account';
// import Account from '../../components/Account';

interface RegisterData {
  type: 'expense';
  value: Number;
  title: string;
  state?: 'activated';
}

const data: { [key: string]: number[] } = {
  Jan: [10, 0, 20, 30, 40, 50, 60, 70, 0],
  Fev: [10, 13, 12, 12, 45, 32, 33, 32, 11],
  Mar: [21, 13, 14, 12, 45, 32, 33, 32, 11],
  Abr: [21, 13, 14, 12, 45, 32, 33, 32, 11],
  Mai: [21, 13, 14, 12, 45, 32, 33, 32, 11],
  Jun: [21, 13, 14, 12, 45, 32, 33, 32, 11],
  Jul: [21, 13, 14, 12, 45, 32, 33, 32, 11],
  Ago: [21, 13, 14, 12, 45, 32, 33, 32, 11],
  Set: [21, 13, 14, 12, 45, 32, 33, 32, 11],
  Out: [21, 13, 14, 12, 45, 32, 33, 32, 11],
  Nov: [21, 13, 14, 12, 45, 32, 33, 32, 11],
  Dez: [],
};

const newData: {
  [key: string]: { [day: string]: RegisterData[] }[];
} = {
  Jan: [
    {
      '2020-01-01': [
        {
          type: 'expense',
          title: 'Cafe',
          value: 200,
        },
      ],
    },
  ],
};

const Dashboard: React.FC = () => {
  const [chartData, setChartData] = useState<number[]>([]);
  const renderItemFromFlatList: ListRenderItem<RegisterData> = useCallback(
    ({ item }: { item: RegisterData }) => (
      <Register
        type={item.type}
        value={item.value}
        title={item.title}
        state={item.state}
      />
    ),
    [],
  );

  const handleSelectedMonth = useCallback((month) => {
    setChartData(data[month].map((d) => d + 20));
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>MyFin.</HeaderTitle>
        <Icon name="setting" size={24} color="rgba(255, 255, 255, 0.9)" />
      </Header>
      <Content>
        <Title>My Dashboard</Title>
        <Account />
      </Content>
      <Registers
        data={[
          {
            id: '1 113123',
            type: 'expense',
            value: 20000000.01,
            title: 'Cafer',
          },
          {
            id: '1 113121',
            type: 'expense',
            value: 200,
            title: 'Taxi',
            state: 'activated',
          },
          {
            id: '1 11312111',
            type: 'expense',
            value: 200,
            title: 'Taxi',
            state: 'activated',
          },
        ]}
        renderItem={renderItemFromFlatList}
        contentContainerStyle={{ paddingLeft: 25 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ChartArea>
        <AreaChart<number>
          style={{ height: 250 }}
          data={chartData}
          curve={shape.curveNatural}
          contentInset={{ top: 25, bottom: 20 }}
          svg={{ fill: '#f1f1f1', strokeWidth: 0 }}
        />
        <MonthBar onMonth={handleSelectedMonth} />
      </ChartArea>
    </Container>
  );
};

export default Dashboard;
