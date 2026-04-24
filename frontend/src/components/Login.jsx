import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function Login() {
  const API = import.meta.env.VITE_API_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${API}/api/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true, //sends cookie
        },
      );

      setUser(response.data.user);
      toast.success("Login successful");

      navigate("/"); // let AuthContext fetch user via /me
    } catch (error) {
      console.log("Login error:", error);

      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl text-black font-semibold text-center mb-6">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-11 px-4 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm mb-1 text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-11 px-4 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 bg-gray-800 text-gray-300 font-semibold rounded-lg 
                     hover:bg-gray-700 transition duration-200"
        >
        {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register link */}
        <p className="text-sm text-center mt-5">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
