const Price = ({ product }) => {
  const hasDiscount =
    product.discountedPrice && product.discountedPrice < product.price;
  const discountedPrice = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0;

  return (
    <p className="py-2">
      {hasDiscount && (
        <span
          style={{
            textDecoration: "line-through",
            color: "gray",
            marginRight: "8px",
          }}
        >
          ${product.price}
        </span>
      )}
      <span style={{ fontWeight: "bold" }}>${product.discountedPrice}</span>
      {hasDiscount && (
        <span style={{ color: "red", marginLeft: "8px" }}>
          -{discountedPrice}%
        </span>
      )}
    </p>
  );
};

export default Price;
