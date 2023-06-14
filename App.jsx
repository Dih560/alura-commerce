import React from 'react';
import Routes from './src/config/routes';
import {AuthProvider} from './src/contexts/AuthContext';
import {ProductsProvider} from './src/contexts/ProductsContext';
import {ThemeProvider} from './src/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProductsProvider>
          <Routes />
        </ProductsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
