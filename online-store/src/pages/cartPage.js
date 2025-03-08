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
    <div className="wrapper">
      <h2 className="title center">Your cart</h2>
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
                  <h3>{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
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
                <Price product={item} />
                  <button
                    onClick={() => clearProductFromCart(item.id)}
                    className="button"
                  >
                    Remove
                  </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <p className="center">Free shipping!</p>
        <h3 className="cart-total">Total: ${total}</h3>
      </div>
      <div className="center">
        <Link to="/checkout" className="button">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
