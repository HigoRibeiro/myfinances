import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/index';
import AppProvider from './hooks';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#22272b" />
    <AppProvider>
      <Routes />
    </AppProvider>
  </NavigationContainer>
);

export default App;
