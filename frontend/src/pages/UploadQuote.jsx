import { useState, useContext } from "react";
import {FaPen} from "react-icons/fa";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";


function UploadQuote() {

  const API = import.meta.env.VITE_API_URL;

  const { user } = useContext(AuthContext);
  const [quoteText, setQuoteText] = useState("");
  // const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API}/api/upload`,
        {
          quoteText,
          author: user?.username,
          category
        },
        {
          withCredentials: true // 🔥 send cookie
        }
      );

      toast.success("Uploaded successfully");

      // reset form
      setQuoteText("");
      // setAuthor("");
      setCategory("");

      navigate("/all-writings");

    } catch (error) {
      console.log("ERROR:", error.response?.data);

      // Handle auth error
      if (error.response?.status === 401) {
        toast.error("Please login first");
        navigate("/login");
      } 
      // Handle validation/server errors
      else {
        toast.error(error.response?.data?.message || "Error uploading quote");
      }
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4 p-8 
        backdrop-blur-lg bg-white/30 border border-white/40 
        shadow-lg rounded-2xl text-gray-800"
      >
        <h3 className="text-xl font-bold text-center">Express Your Thoughts</h3>

        <textarea
          placeholder="Enter text"
          value={quoteText}
          onChange={(e) => setQuoteText(e.target.value)}
          className="border border-white/40 bg-white/40 p-3 rounded-md text-gray-900 placeholder-black focus:outline-none focus:ring-2 focus:border-gray-800"
          required
        />

        {/* <input
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-white/40 bg-white/40 p-3 text-gray-900 rounded-md placeholder-black focus:outline-none focus:ring-2 focus:border-gray-800"
          required
        /> */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-900 bg-white p-3 rounded-md 
          text-gray-800 shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-gray-800"
          required
        >
          <option value="" disabled hidden>
            Select Category
          </option>
          <option value="quote">Quote</option>
          <option value="poem">Poem</option>
          <option value="shayari">Shayari</option>
        </select>

        <button
          type="submit"
          disabled={!category}
          className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 p-3 rounded-md font-semibold transition shadow-md"
        >
          Submit
        </button>
        <p className="text-sm text-gray-600 mb-4 text-center">
        Please login to submit your content.
      </p>
      </form>
    </div>
  );
}

export default UploadQuote;