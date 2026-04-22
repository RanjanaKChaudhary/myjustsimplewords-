import { useEffect, useState } from "react";
import axios from "axios";

function Quotes() {

  const API = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/quotes?category=quote`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {data.map((item) => (
        <div
          key={item._id}
          className=" p-5 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          {/* Content */}
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
            {item.quoteText}
          </p>

          {/* Author */}
          <p className="text-right mt-4 text-blue-500 font-medium">
            — {item.author}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
