import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <div className="navbar">
      <div className="logo">Food Cart</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cart">
            <span className="cart-count">View Cart ({cartCount})</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Header };
export default Header;
