import React from 'react';

import { AccountProvider } from './account';

const AppProvider: React.FC = ({ children }) => (
  <AccountProvider>{children}</AccountProvider>
);

export default AppProvider;
