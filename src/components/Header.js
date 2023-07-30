import React from "react";
import "../css/style.css";

function Header({ cartItemsCount, onOpenCart }) {
  return (
    <div className="header-wrap">
      <button onClick={onOpenCart} className="header-cartbtn">
        장바구니 <span className="cart-count">({cartItemsCount})</span>
      </button>
    </div>
  );
}

export default Header;
