import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <h2 className="logo">Food Cart</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">View Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
