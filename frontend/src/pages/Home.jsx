
import { useNavigate } from "react-router-dom";
import { FaPenNib, FaQuoteRight, FaFeatherAlt } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* 🔥 Hero Section */}
      <div className="text-center py-20 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to MyJustSimpleWords ✨
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          A place where words become emotions — explore quotes, poems, and
          shayari that touch your heart.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => navigate("/all-writings")}
            className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Explore Writings
          </button>

          <button
            onClick={() => navigate("/upload-quote")}
            className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Write Your Own
          </button>
        </div>
      </div>

      {/*Features Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Quotes */}
        <div
          onClick={() => navigate("/quotes")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition transform hover:-translate-y-2"
        >
          <FaQuoteRight className="text-3xl text-indigo-500 mb-4" />
          <h3 className="text-xl font-bold">Quotes</h3>
          <p className="text-gray-600 mt-2">
            Discover meaningful quotes that inspire and motivate your life.
          </p>
        </div>

        {/* Poems */}
        <div
          onClick={() => navigate("/poems")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition transform hover:-translate-y-2"
        >
          <FaFeatherAlt className="text-3xl text-pink-500 mb-4" />
          <h3 className="text-xl font-bold">Poems</h3>
          <p className="text-gray-600 mt-2">
            Dive into beautiful poetry written from the heart.
          </p>
        </div>

        {/* Shayari */}
        <div
          onClick={() => navigate("/shayari")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition transform hover:-translate-y-2"
        >
          <FaPenNib className="text-3xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold">Shayari</h3>
          <p className="text-gray-600 mt-2">
            Express emotions in poetic Hindi/Urdu style with shayari.
          </p>
        </div>
      </div>

      {/* 💬 Call to Action */}
      <div className="text-center py-16 bg-indigo-600 text-white px-6">
        <h2 className="text-3xl font-bold">
          Got something in your heart? ❤️
        </h2>
        <p className="mt-3 text-gray-200">
          Share your own words with the world and inspire others.
        </p>

        <button
          onClick={() => navigate("/upload-quote")}
          className="mt-6 px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Start Writing
        </button>
      </div>

    </div>
  );
}

export default Home;