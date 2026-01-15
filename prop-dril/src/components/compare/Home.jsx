import React, { useState } from "react";
import "./product.css";
import data from "../../assets/foods.json";
import "./Home.css";

export const Home = ({ addToCart, cart, increaseQuantity, decreaseQuantity }) => {
    const [products] = useState(data);
    const [quantities, setQuantities] = useState({});

    // Check if a product is in the cart
    const isInCart = (productId) => {
        return cart?.some(item => item.id === productId);
    };

    // Get the quantity for a product from cart
    const getCartQuantity = (productId) => {
        const cartItem = cart?.find(item => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };

    // Get display quantity (local state for new items, cart quantity for existing)
    const getDisplayQuantity = (productId) => {
        if (isInCart(productId)) {
            return getCartQuantity(productId);
        }
        return quantities[productId] || 1;
    };

    const handleAddToCart = (product) => {
        const qty = quantities[product.id] || 1;
        addToCart(product, qty);
        // Reset local quantity after adding
        setQuantities({ ...quantities, [product.id]: undefined });
    };

    const handleIncreaseQty = (productId) => {
        if (isInCart(productId)) {
            // If in cart, update cart directly
            increaseQuantity(productId);
        } else {
            // If not in cart, update local state
            const currentQty = quantities[productId] || 1;
            setQuantities({
                ...quantities,
                [productId]: currentQty + 1,
            });
        }
    };

    const handleDecreaseQty = (productId) => {
        if (isInCart(productId)) {
            // If in cart, update cart directly
            decreaseQuantity(productId);
        } else {
            // If not in cart, update local state
            const currentQty = quantities[productId] || 1;
            if (currentQty > 1) {
                setQuantities({
                    ...quantities,
                    [productId]: currentQty - 1,
                });
            }
        }
    };

    return (
        <div className="home-container">
            <h2>Our Products</h2>
            <div className="product-container">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="product">
                            <div className="img">
                                <img src={product.pic} alt={product.name} />
                            </div>

                            <div className="details">
                                <h3>{product.name}</h3>
                                <p className="shop">{product.shop}</p>
                                <p className="price">Price Rs: {product.amt}</p>
                                <div className="quantity-controller">
                                    <button
                                        className="qty-btn minus-btn"
                                        onClick={() => handleDecreaseQty(product.id)}
                                    >
                                        −
                                    </button>
                                    <span className="quantity">
                                        {getDisplayQuantity(product.id)}
                                    </span>
                                    <button
                                        className="qty-btn plus-btn"
                                        onClick={() => handleIncreaseQty(product.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    {isInCart(product.id) ? "Update Cart" : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};