import React, {createContext, useCallback, useEffect, useState} from 'react';
import {
  getProducts,
  removeProduct,
  saveProduct,
} from '../services/requests/products';

export const ProductsContext = createContext({});

export function ProductsProvider({children}) {
  const [quantity, setQuantity] = useState(0);
  const [lastView, setLastView] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleGetProducts = useCallback(() => {
    getProducts().then(result => {
      if (result.length > 0) {
        setCart(result);
        setQuantity(result.length);
        setTotalPrice(result.reduce((ammounter, r) => ammounter + r.price, 0));
      }
    });
  }, []);

  const handleViewProduct = product => {
    saveProduct(product).then(result => {
      setCart([...cart, result]);
      let newLastView = new Set(lastView);
      newLastView.add(product);
      setLastView([...newLastView]);
      setQuantity(quantity + 1);
      setTotalPrice(totalPrice + product.price);
    });
  };

  const handleFinishPurchase = async () => {
    return new Promise((resolve, reject) => {
      try {
        cart.forEach(async product => {
          removeProduct(product.id);
        });
        setQuantity(0);
        setTotalPrice(0);
        setCart([]);
        resolve('Compra finalizada com sucesso!');
      } catch (err) {
        reject(
          'Erro ao tentar finalizar a compra, tente novamente mais tarde!',
        );
      }
    });
  };

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  return (
    <ProductsContext.Provider
      value={{
        quantity,
        lastView,
        totalPrice,
        cart,
        viewProduct: handleViewProduct,
        finishPurchase: handleFinishPurchase,
      }}>
      {children}
    </ProductsContext.Provider>
  );
}
