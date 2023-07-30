import React from "react";
import "../css/style.css";

function CartItem({ item, onUpdateCartItem, onRemoveFromCart }) {
  const handleIncrease = () => {
    onUpdateCartItem({ ...item, quantity: item.quantity + 1 });
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateCartItem({ ...item, quantity: item.quantity - 1 });
    }
  };

  return (
    <div className="modalitem-wrap">
      <div className="modalitem-info">
        <h3>{item.name}</h3>
        <p>{item.price}원</p>
      </div>
      <div className="modalitem-control">
        <button onClick={handleDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
        <button onClick={() => onRemoveFromCart(item.name)}>제거</button>
      </div>
    </div>
  );
}

export default CartItem;
