import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedSearch = search.trim();

    if (!trimmedSearch) return;

    navigate(`/search?author=${encodeURIComponent(trimmedSearch)}`);
  };

  return (
    <div className="flex gap-2 items-center">
      <input 
      type="text" placeholder="Search author..." 
      value={search} onChange={(e) => setSearch(e.target.value)} 
      onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
      className="w-full bg-slate-800 text-white px-3 py-2 rounded-lg" />

      <button 
      onClick={handleSearch} className="bg-yellow-500 px-4 py-3 rounded-lg hover:bg-yellow-300" >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;