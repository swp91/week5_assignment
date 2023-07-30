import React, { useState } from "react";
import "../css/style.css";

function Item({ item, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAdd = () => {
    onAddToCart({ ...item, quantity: Number(quantity) });
    setQuantity(1);
  };

  return (
    <div className="itembox">
      <div className="item-info">
        <h2 className="item-name">{item.name}</h2>
        <p className="item-price">{item.price}원</p>
      </div>
      <div className="item-inputbtn">
        수량
        <input
          className="item-input"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button className="item-addbtn" onClick={handleAdd}>
          추가하기
        </button>
      </div>
    </div>
  );
}

export default Item;
