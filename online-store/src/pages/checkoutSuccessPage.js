import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div>
      <h2>Order Successful!</h2>
      <Link to="/">Return to Store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
