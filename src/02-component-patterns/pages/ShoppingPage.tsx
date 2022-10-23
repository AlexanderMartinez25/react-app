import { useState } from "react";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "Coffe Mug - Meme",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCard extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCard;
  }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
    setShoppingCart((oldShopingCart) => {
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

  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.4" }} />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard key={key} product={product} className="bg-dark text-white" style={{ width: "100px" }}>
            <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.4" }} />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>

      <div>
        <code> {JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
