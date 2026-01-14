import React, { useState } from "react";
import data from "../../assets/foods.json";
export const Home = () => {
    const [products] = useState(data);
    return (
        <div className="product-container">
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                    </div>
                );
            })}
        </div>
    );
};