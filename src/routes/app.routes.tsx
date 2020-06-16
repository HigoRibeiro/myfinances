import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Account from '../pages/Account';
import NewAccount from '../pages/NewAccount';

const App = createStackNavigator();

const AppRouter: React.FC = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#fff' },
      // headerStyle: { backgroundColor: '#22272b' },
      // headerBackTitleStyle: { color: '#FFF' },
      // headerTitleStyle: { color: '#FFF' },
    }}
    initialRouteName="Account"
  >
    <App.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ headerShown: false }}
    />
    <App.Screen name="Account" component={Account} />
    <App.Screen
      name="NewAccount"
      component={NewAccount}
      options={{ headerShown: false }}
    />
  </App.Navigator>
);

export default AppRouter;
