import React, { useState, useEffect } from "react";
import CartList from "../../components/cart-list/CartList";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem("cart");
      setCart(saved ? JSON.parse(saved) : []);
    };

    window.addEventListener("storage", handleStorageChange);

    const interval = setInterval(handleStorageChange, 500);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  console.log("Cart yangilandi:", cart);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>🛒 Savatingiz bo'sh</h2>
          <p>Mahsulot qo'shish uchun "Add to cart" tugmasini bosing</p>
        </div>
      ) : (
        cart.map((product) => <CartList key={product.id} {...product} />)
      )}
    </div>
  );
};

export default Cart;
