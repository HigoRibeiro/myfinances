import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from '../model/schema';
import Account from '../model/Account';

console.log('schema');
console.log(schema);
console.log(Database);
console.log(SQLiteAdapter);
console.log('---');

const adapter = new SQLiteAdapter({
  schema,
});

interface AccountContextData {}

const AccountContext = createContext<AccountContextData>(
  {} as AccountContextData,
);

const DatabaseProvider: React.FC = ({ children }) => {
  const [database, setDatabase] = useState<Database>(() => {
    console.log('aqui');
    console.log(Account);
    console.log('---');
    const Db = new Database({
      adapter,
      modelClasses: [Account],
      actionsEnabled: true,
    });

    return Db();
  });

  return (
    <AccountContext.Provider value={{}}>{children}</AccountContext.Provider>
  );
};

function useDatabase(): AccountContextData {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error('useDatabase must be used within an DatabaseProvider');
  }

  return context;
}

export { DatabaseProvider, useDatabase };
