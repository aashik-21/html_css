import React, { useState } from "react";
import "./product.css";
import data from "../../assets/foods.json";
import "./Home.css";
export const Home = () => {
    const [products] = useState(data);
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
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};