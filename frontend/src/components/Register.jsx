import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const API = import.meta.env.VITE_API_URL;

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
         `${API}/api/auth/register`,
        {
          username,
          email,
          password,
        }
      );

      console.log(response.data);
      toast.success("Registration successful",
        {toastClassName:"bg-yellow-400 text-gray-900"});

      // Navigate ONLY after success
      navigate("/login");

    } catch (error) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleRegistration}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full h-11 px-4 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-600">
            Email
          </label>
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
          <label className="block text-sm mb-1 text-gray-600">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full h-11 px-4 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="text-xs text-gray-500 mb-4">
          Must be at least 6 characters
        </p>

        <button
          type="submit"
          className="w-full h-11 bg-gray-800 text-gray-300 font-semibold rounded-lg"
        >
          Register
        </button>

        <p className="text-sm text-center mt-5">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600 font-medium">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Register;