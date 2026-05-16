import { useProductForm } from "../hooks/useProductForm";

function ProductForm() {
  const { form, message, loading, handleChange, handleSubmit } = useProductForm(
    { name: "", image: "", price: "" },
    "http://localhost:3001/products"
  );

  return (
    <div>
      {message && (
        <div className={`p-2 mb-3 rounded ${message?.includes("failed") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
        <input
          name="name"
          value={form.name}
          placeholder="Coffee name"
          onChange={handleChange}
          className="w-full border p-2 mb-2 rounded-xl border-gray-300 bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition"
        />

        <input
          name="image"
          value={form.image}
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full border p-2 mb-2 rounded-xl border-gray-300 bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition"
        />

        <input
          name="price"
          value={form.price}
          placeholder="Price"
          onChange={handleChange}
          className="w-full border p-2 mb-2 rounded-xl border-gray-300 bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition"
        />

        <button 
          disabled={loading} 
          className="bg-amber-800 text-white px-4 py-2 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;