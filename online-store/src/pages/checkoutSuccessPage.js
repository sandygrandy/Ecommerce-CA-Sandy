import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div className="wrapper center checkout">
      <h2>Order Successful!</h2>
      <p>Thank you for shopping with us!</p>
      <p>Your order has been placed successfully.</p>
      <p>You will receive an email confirmation shortly.</p>
      <Link to="/" className="button checkout-button">Return to Store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
