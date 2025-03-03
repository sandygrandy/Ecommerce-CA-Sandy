import { Link } from "react-router-dom";

const CartIcon = ({ cart }) => {
  return (
    <Link to="/cart" className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l1 5m0 0h13l1-5m-15 0a2 2 0 012-2h10a2 2 0 012 2m-12 5l1 9a2 2 0 002 2h6a2 2 0 002-2l1-9m-14 0h14"
        />
      </svg>
      {cart && cart.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {cart.length}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
