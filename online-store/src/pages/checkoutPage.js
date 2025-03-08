import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ clearCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div className="center checkout">
      <h2 className="title">Checkout</h2>
      <button onClick={handleCheckout} className="button checkout-button">
        Complete Purchase
      </button>
    </div>
  );
};

export default CheckoutPage;
