function Navbar({ setPage }) {
  return (
    <nav className="bg-amber-900 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Coffee R Us ☕</h1>

      <div className="space-x-4">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("shop")}>Shop</button>
        <button onClick={() => setPage("admin")}>Admin</button>
      </div>
    </nav>
  );
}

export default Navbar;