import React, { useEffect, useState } from "react";
import "./Cart.css";

export const Cart = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce(
      (acc, curr) => acc + parseInt(curr.amt) * curr.quantity,
      0
    );
    setTotal(totalAmount);
  }, [cart]);

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty. Start shopping!</p>
        </div>
      ) : (
        <>
          <div className="cart-container">
            {cart.map((product) => (
              <div className="cart-product" key={product.id}>
                <div className="img">
                  <img src={product.pic} alt={product.name} />
                </div>
                <div className="cart-product-details">
                  <h3>{product.name}</h3>
                  <p>Price Rs: {product.amt}</p>
                  <div className="quantity-controller">
                    <button
                      className="qty-btn minus-btn"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      −
                    </button>
                    <span className="quantity">{product.quantity}</span>
                    <button
                      className="qty-btn plus-btn"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <h2 className="cart-amt">Total Amount Rs: {total}</h2>
        </>
      )}
    </>
  );
};
