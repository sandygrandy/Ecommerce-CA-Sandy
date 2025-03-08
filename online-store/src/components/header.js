import { Link } from "react-router-dom";
import CartIcon from "./carticon";
import "../styles/styles.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav wrapper">
          <div className="nav-link-container">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </div>
          <div className="cart-icon-container">
            <CartIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
