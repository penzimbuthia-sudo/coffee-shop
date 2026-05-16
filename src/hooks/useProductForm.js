import { useState } from "react";

export function useProductForm(initialState, url) {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setMessage("Product added successfully!");
        setForm(initialState);
        setTimeout(() => setMessage(""), 3000);
      })
      .catch(() => setMessage("Failed to add product."))
      .finally(() => setLoading(false));
  };

  return { form, message, loading, handleChange, handleSubmit };
}