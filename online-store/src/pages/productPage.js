import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-96 object-cover rounded-md"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold mt-2">
        ${product.discountedPrice}{" "}
        {product.price > product.discountedPrice && (
          <span className="text-red-500 line-through">${product.price}</span>
        )}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-green-600 text-white p-2 rounded-md hover:bg-green-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
