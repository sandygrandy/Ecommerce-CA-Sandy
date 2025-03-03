import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">${product.discountedPrice}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-2 block text-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500"
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
