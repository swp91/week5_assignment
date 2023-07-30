import React from "react";
import Item from "./Item";
import "../css/style.css";

function ItemList({ onAddToCart }) {
  const items = [
    { name: "피자", price: 10000 },
    { name: "치킨", price: 5000 },
    { name: "햄버거", price: 30000 },
  ];

  return (
    <div className="list-wrap">
      {items.map((item) => (
        <Item key={item.name} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ItemList;
