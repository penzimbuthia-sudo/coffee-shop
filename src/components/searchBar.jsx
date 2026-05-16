function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search coffee..."
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
}

export default SearchBar;