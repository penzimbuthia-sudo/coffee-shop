function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search coffee..."
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border p-2 mb-2 rounded-xl border-gray-300 bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition"
    />
  );
}

export default SearchBar;