import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Account from '../pages/Account';
import NewAccount from '../pages/NewAccount';

const App = createStackNavigator();
const Root = createStackNavigator();

const AppRouter: React.FC = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: 'rgb(47, 52, 55)' },
      headerStyle: { backgroundColor: 'rgb(47, 52, 55)' },
      headerBackTitleStyle: { color: 'rgba(255, 255, 255, 0.9)' },
      headerTitleStyle: { color: 'rgba(255, 255, 255, 0.9)' },
    }}
    initialRouteName="Account"
  >
    <App.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ headerShown: false }}
    />
    <App.Screen name="Account" component={Account} />
  </App.Navigator>
);

const RootRouter: React.FC = () => (
  <Root.Navigator mode="modal">
    <Root.Screen
      name="MainStack"
      component={AppRouter}
      options={{ headerShown: false }}
    />
    <Root.Screen
      options={{
        cardStyle: { backgroundColor: 'rgb(47, 52, 55)' },
        headerShown: false,
      }}
      name="NewAccount"
      component={NewAccount}
    />
  </Root.Navigator>
);

export default RootRouter;
