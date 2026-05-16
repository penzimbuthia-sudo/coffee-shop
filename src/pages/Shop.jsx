import { useState, useEffect } from "react";
import SearchBar from "../components/searchBar";
import ProductList from "../components/productList";

function Shop() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <SearchBar setSearch={setSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Shop;