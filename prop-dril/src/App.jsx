import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/compare/Home";
import { Cart } from "./components/cart";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on initial load
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [notification, setNotification] = useState("");

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If product already in cart, increase quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
      setNotification(
        `${product.name} - Quantity increased by ${quantity}!`
      );
    } else {
      // Add new product to cart with specified quantity
      setCart([...cart, { ...product, quantity: quantity }]);
      setNotification(
        `${quantity} x ${product.name} added to cart!`
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Header cartCount={cart.length} />
      {notification && (
        <div className="notification-popup">
          <p>{notification}</p>
        </div>
      )}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
