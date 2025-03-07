import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCart } from "./components/cart/cartContext";
import Layout from "./components/layout";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkoutPage";
import CheckoutSuccessPage from "./pages/checkoutSuccessPage";
import ContactPage from "./pages/contactPage";

const App = () => {

  const { cart, addToCart, removeFromCart, removeItem, clearCart } = useCart();

  return (
    <Router>
      <Layout cart={cart}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage addToCart={addToCart}/>} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} removeItem={removeItem} />} />
          <Route path="/checkout" element={<CheckoutPage clearCart={clearCart} />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
