

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const API = import.meta.env.VITE_API_URL;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); //  add loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
        `${API}/api/auth/me`,
          { withCredentials: true }
        );
         
        console.log("Auth response:", res.data);

        // ✅ handle proper structure
        if (res.data && res.data.user) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }

      } catch (err) {
        if (err.response?.status === 401) {
          console.log("User not logged in");
        } else {
          console.error("Auth error:", err);
        }
        setUser(null);
      } finally {
        setLoading(false); // ✅ stop loading
      }
    };

    checkAuth();
  }, []);

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;