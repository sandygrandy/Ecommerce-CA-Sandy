import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Price from "../components/price";


const ProductPage = ({addToCart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="center">Loading...</p>;

  const cartButtonPressed = () => {
    addToCart(product);
    setCartLoading(true);
    setTimeout(() => {
      setCartLoading(false);
    }, 1000);
  }

  return (
    <div className="single-product-container">
      <div className="product-image-container">
        <img
          className="product-img"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>
      <div>
        <h1 className="title">{product.title}</h1>
        <p>{product.description}</p>
        <Price product={product} />
        <button onClick={cartButtonPressed} className="button" disabled={cartLoading}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
