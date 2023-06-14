import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === 'diego@email.com' && password === '123') {
      setUser({
        name: 'Diego',
        email,
        phone: '+55 (19) 99999-9999',
        address: 'Rua dos Bacanas, 100',
      });
      return 'ok';
    }

    return 'Email ou senha inválidos!';
  };

  return (
    <AuthContext.Provider value={{user, login: handleLogin}}>
      {children}
    </AuthContext.Provider>
  );
}
