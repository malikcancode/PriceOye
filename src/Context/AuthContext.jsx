import { createContext, useEffect, useState } from "react";
import Loading from "../pages/Loading";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, []);

  function login(email, password) {
    const userData = {
      id: 1,
      email: "malik@gmail.com",
      password: "123",
    };

    if (email === userData.email && password === userData.password) {
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      alert("Invalid Email or Password!");
    }
  }

  function logout() {
    localStorage.clear();
    setIsAuthenticated(false);
  }

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <>
      <AuthContext.Provider value={{ login, user, isAuthenticated, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
