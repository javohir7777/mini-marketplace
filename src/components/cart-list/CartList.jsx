import React, { useState } from "react";
import "./CartList.css";

const CartList = ({ id, image, title, price, quantity, category }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const updateQuantity = (change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) {
      removeFromCart();
      return;
    }

    setCurrentQuantity(newQuantity);

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("storage"));
  };

  const removeFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("storage"));
  };

  const totalPrice = price * currentQuantity;

  return (
    <div className="cart-item">
      <img src={image} alt={title} className="cart-item-image" />

      <div className="cart-item-info">
        <h3>{title}</h3>
        <p className="category">{category}</p>
        <p className="price">Narxi: {price.toLocaleString()} so'm</p>

        <div className="quantity-control">
          <button onClick={() => updateQuantity(-1)} className="qty-btn">
            -
          </button>
          <span className="qty-value">{currentQuantity}</span>
          <button onClick={() => updateQuantity(1)} className="qty-btn">
            +
          </button>
        </div>
      </div>

      <div className="cart-item-total">
        <p>Jami: {totalPrice.toLocaleString()} so'm</p>
        <button onClick={removeFromCart} className="remove-btn">
          ❌ O'chirish
        </button>
      </div>
    </div>
  );
};

export default CartList;
