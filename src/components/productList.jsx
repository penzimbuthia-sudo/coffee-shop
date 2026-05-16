import ProductCard from "./productCard";

function ProductList({ products }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;