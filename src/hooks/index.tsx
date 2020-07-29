import React from 'react';

import { AccountProvider } from './account';
import { DatabaseProvider } from './database';

const AppProvider: React.FC = ({ children }) => (
  // <DatabaseProvider>
  <AccountProvider>{children}</AccountProvider>
  // </DatabaseProvider>
);

export default AppProvider;
