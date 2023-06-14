import React, {createContext} from 'react';

export const GlobalContext = createContext({});

export function InfoProvider({children}) {
  return (
    <GlobalContext.Provider value={{value: 150}}>
      {children}
    </GlobalContext.Provider>
  );
}
