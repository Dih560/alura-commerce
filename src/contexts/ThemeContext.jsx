import React, {createContext, useCallback, useEffect, useState} from 'react';
import {dark, light} from '../config/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext({});

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('dark');

  const themes = {dark, light};

  const handleSetTheme = async newTheme => {
    await AsyncStorage.setItem('@theme', newTheme);
    setTheme(newTheme);
  };

  const handleGetStorageTheme = useCallback(async () => {
    let storageTheme = await AsyncStorage.getItem('@theme');
    if (storageTheme) {
      setTheme(storageTheme);
    }
  }, []);

  useEffect(() => {
    handleGetStorageTheme();
  }, [handleGetStorageTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themes: themes[theme],
        setTheme: handleSetTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
