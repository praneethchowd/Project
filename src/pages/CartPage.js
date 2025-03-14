import { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart">
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        cart.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
