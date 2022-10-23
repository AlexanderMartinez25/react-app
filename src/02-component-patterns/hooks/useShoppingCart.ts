import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";

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
      console.log({ count });

      if (count < 1) {
        const { [product.id]: toDelete, ...rest } = oldShopingCart;
        return rest;
      }

      return {
        ...oldShopingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    // Propiedades
    shoppingCart,

    // Métodos
    onProductCountChange,
  };
};
