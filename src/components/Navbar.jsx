import { Link } from "react-router-dom";

function Navbar({ setPage }) {
  return (
    <nav className="bg-amber-900 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Coffee R Us </h1>

      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;