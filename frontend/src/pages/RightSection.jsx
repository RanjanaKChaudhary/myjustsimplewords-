import { FaSearch, FaHeart } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SearchBar from "../components/SearchBar";
import useLogout from "../hooks/useLogout";

function RightSection() {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useContext(AuthContext);

  const logout = useLogout();

  return (

    <div className="flex-1 bg-slate-100 min-h-screen p-5">

      {/* Header */}
      <div className="sticky top-0 flex items-center justify-between bg-white px-6 py-3 shadow-md rounded-lg">
        
        {/* SearchBar */}
        <div className="w-1/3">
          <SearchBar />
        </div>
        <div className="flex items-center gap-3">
          
          {/* Auth Buttons */}
          {isLoggedIn && (
            <p className="text-sm text-gray-600">
              👋 Welcome back,{" "}
              <span className="font-semibold text-gray-900">
                {user?.username}
              </span>
            </p>
          )}
          
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-gray-800 font-semibold rounded-lg shadow hover:bg-red-400 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          Welcome to MyJustSimpleWords
          <FaHeart className="text-red-500" />
        </h2>
      </div>

      {/* Pages render here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default RightSection;
