import { Link } from "react-router-dom";
import CartIcon from "./carticon";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link to="/">Online Store</Link>
        </h1>
        <div className="flex space-x-4">
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
