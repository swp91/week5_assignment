import React, { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import CartModal from "./components/CartModal";
import "./css/style.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const handleAddToCart = (item) => {
    // 추가하려는 아이템의 수량이 0인지 확인
    if (item.quantity <= 0) {
      alert("수량은 1개 이상이어야 합니다.");
      return;
    }

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);

      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }

      return [...prevItems, { ...item }];
    });
  };

  const handleUpdateCartItem = (updatedItem) => {
    const updatedCartItems = cartItems.map((item) =>
      item.name === updatedItem.name ? updatedItem : item
    );
    setCartItems(updatedCartItems);
  };

  const handleOpenCart = () => {
    setCartModalOpen(true);
  };

  const handleCloseCart = () => {
    setCartModalOpen(false);
  };

  const handleRemoveFromCart = (name) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="wrapper">
      <Header cartItemsCount={cartItems.length} onOpenCart={handleOpenCart} />
      <ItemList onAddToCart={handleAddToCart} />
      {isCartModalOpen && (
        <CartModal
          cartItems={cartItems}
          onUpdateCartItem={handleUpdateCartItem}
          onRemoveFromCart={handleRemoveFromCart}
          onCloseCart={handleCloseCart}
        />
      )}
    </div>
  );
}

export default App;
