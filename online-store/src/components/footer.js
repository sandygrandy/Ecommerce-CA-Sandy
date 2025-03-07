const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
            <div className="footer-section">
                <h3>About Us</h3>
                <p>Your go-to store for amazing deals and products.</p>
            </div>
            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </div>
        <div>
      © 2025 Online Store
        </div>
    </footer>
  );
};

export default Footer;
