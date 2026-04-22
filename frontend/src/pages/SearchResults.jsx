import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function SearchResults() {

  const API = import.meta.env.VITE_API_URL;

  const [searchedAuthorDetails, setSearchedAuthorDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchResults = async () => {
      const query = new URLSearchParams(location.search);
      const author = query.get("author");
      console.log("Author:", author);

      if (!author) return;

      try {
        setLoading(true);

        const res = await axios.get(
          `${API}/api/search?author=${author}`,
          { withCredentials: true }
        );

        setSearchedAuthorDetails(res.data);
      } catch (err) {
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [location.search]);

  return (
    <div className="p-6">
      {/* Results */}
      <div className="mt-6 grid gap-4">
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : searchedAuthorDetails.length === 0 ? (
          <p className="text-gray-400">No data found!</p>
        ) : (
          searchedAuthorDetails.map((quote) => (
            <div
              key={quote._id}
              className="p-5 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
                {quote.quoteText}
              </p>

              <p className="text-right mt-4 text-blue-500 font-medium">
                - {quote.author}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchResults;