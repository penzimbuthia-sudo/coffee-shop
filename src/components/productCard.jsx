function ProductCard({ product }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.price} KES</p>
    </div>
  );
}

export default ProductCard;