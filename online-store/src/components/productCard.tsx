import { Link } from "react-router-dom";
import Price from "./price";
import "../styles/styles.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image.url} alt={product.title} className="card-image" />
      <h3 className="font-bold text-xl text-gray-800 py-2">{product.title}</h3>
      <Price product={product} />
      <Link to={`/product/${product.id}`} className="button center">
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
