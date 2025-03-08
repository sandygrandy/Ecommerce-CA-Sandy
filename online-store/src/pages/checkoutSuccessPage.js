import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div className="wrapper center checkout">
      <h2 className="title">Order Successful!</h2>
      <p className="center">Thank you for shopping with us!</p>
      <p className="center">Your order has been placed successfully.</p>
      <p className="center">You will receive an email confirmation shortly.</p>
      <Link to="/" className="button checkout-button">
        Return to Store
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
