// src/hooks/useLogout.js

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const useLogout = () => {
  const API = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const logout = async () => {
    try {
      await axios.post(`${API}/api/auth/logout`, {}, { withCredentials: true });
    } catch (error) {
      console.log("Logout API failed:", error);
    } finally {
      //logout on frontend
      setUser(null);
      toast.success("Logged out", {
        toastClassName: "bg-yellow-400 text-gray-900",
      });
      navigate("/");
    }
  };

  return logout;
};

export default useLogout;
