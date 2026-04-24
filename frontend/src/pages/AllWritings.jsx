import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";

function AllWritings() {
  const API = import.meta.env.VITE_API_URL;
  
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await axios.get(`${API}/api/quotes`);

        setAllQuotes(res.data.data); 
      } catch (err) {
        console.log(err);
      }
    };

    fetchQuotes();
  }, []);

  return (
    
      <div>
        
        <p className="text-gray-600 mb-3">
          Your quotes, poems and shayari will appear here.
        </p>
        

      <div className="grid md:grid-cols-2 gap-4">
        {allQuotes.length === 0 ? (
          <p className="text-gray-400">No quotes available</p>
        ) : (
          allQuotes.map((quote) => (
             <div
          key={quote._id}
          className=" p-5 rounded-2xl shadow-md hover:shadow-lg transition"
        >
        
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line"
          >{quote.quoteText}
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

export default AllWritings;