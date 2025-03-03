import { Link } from "react-router-dom";
import CartIcon from "./carticon";
import "../styles/styles.css"
// import "../styles/output.css"

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav-links">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <CartIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
