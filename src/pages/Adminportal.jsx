import ProductForm from "../components/productForm";

function AdminPortal() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Admin Portal</h1>
      <ProductForm />
    </div>
  );
}

export default AdminPortal;