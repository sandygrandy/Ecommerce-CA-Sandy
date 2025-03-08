import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import "../styles/styles.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((res) => res.json())
      .then((res) => setProducts(res.data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">
      <h1 className="title center">Search products</h1>
      <input
        type="text"
        placeholder="Type product name here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar center"
      />
      <div className="product-grid wrapper">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
