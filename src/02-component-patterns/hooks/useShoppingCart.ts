import { useState } from 'react'
import { Product, ProductInCard } from '../interfaces/interfaces';

export const useShoppingCart = () => {
   const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCard;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShopingCart) => {
      const productInCart: ProductInCard = oldShopingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShopingCart,
          [product.id]: productInCart,
        };
      }

      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShopingCart;
      return { ...rest };

      // if (count < 1) {
      //   const { [product.id]: toDelete, ...rest } = oldShopingCart;
      //   return rest;
      // }

      // return {
      //   ...oldShopingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    // Propiedades
    shoppingCart,

    // Métodos
    onProductCountChange
  }
}

