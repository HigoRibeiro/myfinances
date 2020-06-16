import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

import produce, { Draft } from 'immer';

interface AccountData {
  title: string;
  cash: number;
  type: 'bank' | 'wallet' | 'creditcard';
  current?: boolean;
}

interface AccountContextData {
  accounts: AccountData[];
  currentAccount?: AccountData;
  loading: boolean;
  setCurrentAccount(idCurrentAccount: string): void;
}

const AccountContext = createContext<AccountContextData>(
  {} as AccountContextData,
);

const AccountProvider: React.FC = ({ children }) => {
  const [accounts, setAccounts] = useState<AccountData[]>([]);
  const [currentAccount, setCurrentAccountInternal] = useState<AccountData>();

  const [loading, setLoading] = useState<boolean>(true);

  const setCurrentAccount = useCallback((idCurrentAccount: string) => {
    setAccounts((prevAccountsState) =>
      produce(prevAccountsState, (draf: Draft<AccountData[]>) => {
        draf.forEach((account, index) => {
          draf[index].current = account.title === idCurrentAccount;
        });
      }),
    );
  }, []);

  useEffect(() => {
    const foundCurrentAccount = accounts.find((account) => account.current);

    if (foundCurrentAccount) {
      setCurrentAccountInternal(foundCurrentAccount);
    }
  }, [accounts]);

  useEffect(() => {
    setAccounts([
      {
        title: 'SICOOB',
        cash: 12000,
        type: 'wallet',
        current: true,
      },
      {
        title: 'NuBank',
        cash: 2000,
        type: 'bank',
      },
      {
        title: 'Itau Card',
        cash: 234,
        type: 'creditcard',
      },
    ]);

    setLoading(false);
  }, []);

  return (
    <AccountContext.Provider
      value={{ accounts, setCurrentAccount, currentAccount, loading }}
    >
      {children}
    </AccountContext.Provider>
  );
};

function useAccount(): AccountContextData {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error('useAccount must be used within an AuthProvider');
  }

  return context;
}

export { AccountProvider, useAccount };
