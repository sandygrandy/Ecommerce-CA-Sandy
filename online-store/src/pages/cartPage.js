import { Link } from "react-router-dom";

const CartPage = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-2">
            <h3>{item.title}</h3>
            <p>${item.discountedPrice}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))
      )}
      <h3 className="text-xl font-bold mt-4">Total: ${total}</h3>
      <Link
        to="/checkout"
        className="block bg-blue-600 text-white text-center p-2 rounded-md mt-4 hover:bg-blue-500"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartPage;
