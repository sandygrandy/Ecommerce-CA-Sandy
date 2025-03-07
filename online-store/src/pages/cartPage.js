import { Link } from "react-router-dom";
import "../styles/styles.css";
import Price from "../components/price";

const CartPage = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <div className="wrapper">
      <h2 className="title center">Your cart 🐈</h2>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p>Your cart is empty 🐈</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <div className="cart-items cart-wrapper">
                <img
                  className="cart-img"
                  src={item.image.url}
                  alt={item.description}
                />
                <h3>{item.title}</h3>
                <Price product={item} />
                <div>
                  <button
                    onClick={() => removeFromCart(item.id)}
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
