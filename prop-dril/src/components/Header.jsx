import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">Food Cart</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cart">View Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export { Header };
export default Header;
