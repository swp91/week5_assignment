import React from "react";
import CartItem from "./CartItem";
import "../css/style.css";

function CartModal({
  cartItems,
  onUpdateCartItem,
  onRemoveFromCart,
  onCloseCart,
}) {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function formatPrice(price) {
    return new Intl.NumberFormat("ko-KR").format(price);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {cartItems.map((item) => (
          <CartItem
            key={item.name}
            item={item}
            onUpdateCartItem={onUpdateCartItem}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
        <div className="total-price">
          <p>총합: {formatPrice(total)}원</p>
        </div>
        <div className="modal-closebtn">
          <button onClick={onCloseCart} className="modal-btn">
            확인
          </button>
          <button onClick={onCloseCart} className="modal-btn">
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
