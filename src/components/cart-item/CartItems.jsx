import React from "react";

import "./CartItems.css";

const CartItems = ({ image, category, title, price, id, addToCart }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={`${image}`} alt={`${category}`} />
      </div>
      <div className="card-footer">
        <h2>{category}</h2>
        <p>{title}</p>
        <div>{price}</div>
        <button onClick={() => addToCart(id)} className="btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;
