import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { auth, googleProvider, signInWithPopup } from "./firebase";

export default function Login() {
  const credentials = {
    Wael: {
      email: "wael@gmail.com",
      password: "ps1",
      movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], // Wael has all movies
    },
    ahmed: {
      email: "ahmed@gmail.com",
      password: "ps2",
      movies: [3, 15], // Ahmed has only 2 movies
    },
    ali: {
      email: "ali@gmail.com",
      password: "ps3",
      movies: [2, 5, 8, 10, 13], // Ali has a specific set of movies
    },
  };

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext); // Use context to set the user

  const navigate = useNavigate();

  // Manual login
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.keys(credentials).find(
      (key) =>
        credentials[key].email === email && credentials[key].password === password
    );

    if (user) {
      setUser({ name: user, email: credentials[user].email }); // Update the context
      navigate("/home"); // Navigate to home
    } else {
      setError("Incorrect email or password. Please try again.");
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser({ name: user.displayName, email: user.email }); // Update the context
      navigate("/home"); // Navigate to home
    } catch (error) {
      console.error("Error with Google Login:", error);
      setError("Failed to log in with Google. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="mb-4 text-sm text-red-400 text-center">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 mb-4 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center text-gray-400 my-4">or</div>
        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md flex items-center justify-center space-x-3"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}



