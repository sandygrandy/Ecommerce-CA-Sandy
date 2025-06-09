import { Link } from "react-router-dom";
import "../styles/styles.css";
import Price from "../components/price";

const CartPage = ({
  cart,
  removeFromCart,
  addToCart,
  clearProductFromCart,
}) => {
  const total = cart.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <div className="wrapper fill-wrapper">
      <h2 className="title center mt-10 mb-8">Your cart</h2>
      <div>
        {cart.length === 0 ? (
          <p className="center">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-container">
              <div className="cart-wrapper">
                <div className="cart-items">
                  <img
                    className="cart-img"
                    src={item.image.url}
                    alt={item.image.alt}
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <Price product={item} />
                    <p className="my-3">Quantity: {item.quantity}</p>
                    <div className="my-5">
                    <button
                      className="change-quantity-button"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className="change-quantity-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    </div>
                    <button
                      onClick={() => clearProductFromCart(item.id)}
                      className="button mt-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <p className="center my-8">Free shipping!</p>
        <h3 className="cart-total my-8">Total: ${total}</h3>
      </div>
      <div className="center my-8">
        <Link to="/checkout" className="button">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
