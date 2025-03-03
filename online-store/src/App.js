import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkoutPage";
import CheckoutSuccessPage from "./pages/checkoutSuccessPage";
import ContactPage from "./pages/contactPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
