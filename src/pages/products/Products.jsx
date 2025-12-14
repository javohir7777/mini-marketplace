import React, { useEffect, useState } from "react";
import { products } from "../../data";
import CartItems from "../../components/cart-item/CartItems";

import "./Products.css";

const Products = () => {
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id) => {
    let product = products.find((product) => product.id === id);
    let check = cart.find((product) => product.id === id);

    if (check) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <div className="cards">
        {products.map((product) => (
          <CartItems key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
