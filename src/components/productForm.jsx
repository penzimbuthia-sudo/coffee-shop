import { useState } from "react";

function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setMessage(" Product added successfully!");

        setForm({ name: "", image: "", price: "" });


        setTimeout(() => setMessage(""), 3000);
      });
  };

  return (
    <div>

      {message && (
        <div className="bg-green-100 text-green-700 p-2 mb-3 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
        <input
          name="name"
          value={form.name}
          placeholder="Coffee name"
          onChange={handleChange}
          className="w-full border p-2 mb-2 rounded-xl border-gray-300 bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate200 transition"
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

        <button className="bg-amber-800 text-white px-4 py-2">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;