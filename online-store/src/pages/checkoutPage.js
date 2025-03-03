import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ clearCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Complete Purchase</button>
    </div>
  );
};

export default CheckoutPage;
