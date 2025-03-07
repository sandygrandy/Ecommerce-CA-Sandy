import { Link } from "react-router-dom";
import "../styles/styles.css";
import Price from "../components/price";

const CartPage = ({ cart, removeFromCart, addToCart, clearProductFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <div className="wrapper">
      <h2 className="title center">Your cart</h2>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="center">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <div className="cart-items cart-wrapper">
                <div className="cart-items">
                <img
                  className="cart-img"
                  src={item.image.url}
                  alt={item.image.alt}
                />
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <div>
                <button className="change-quantity-button" onClick={() => addToCart(item)}>+</button>
                <button className="change-quantity-button" onClick={() => removeFromCart(item.id)}>-</button>
                </div>
                </div>
                <Price product={item} />
                <div>
                  <button
                    onClick={() => clearProductFromCart(item.id)}
                    className="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        <h3>Total: ${total}</h3>
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
