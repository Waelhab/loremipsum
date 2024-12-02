import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Login from "./Login";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import Team from "./Team";
import UserData from "./Userdata";
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute

export default function App() {
  return (
    <UserProvider>
      <Router>
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 min-h-screen">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/aboutus" element={<Team />} />
            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <UserData />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}
