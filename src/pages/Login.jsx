import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
    navigate("/home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-start text-gray-800 mb-6">
          Login
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm mb-2 font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="malik@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border mt-1 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              className="block text-sm mb-2 font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-zinc-900 text-white py-2 rounded-md hover:bg-black transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
