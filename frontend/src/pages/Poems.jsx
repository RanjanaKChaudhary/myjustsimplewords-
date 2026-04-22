import {useState,useEffect} from "react";
import axios from "axios";

function Poems() {
  const API = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/quotes?category=poem`)
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      

      {data.map((item) => (
         <div
          key={item._id}
          className=" p-5 rounded-2xl shadow-md hover:shadow-lg transition"
        >
        
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line"
          >{item.quoteText}
          </p>

          <p className="text-right mt-4 text-blue-500 font-medium">
            - {item.author}
            </p>
        
        </div>
      ))}
    </div>
  );
}

export default Poems;

