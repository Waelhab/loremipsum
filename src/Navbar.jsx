import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-gray-300 text-2xl font-bold tracking-wide">
              {/* Checks if the userContext that was passed is true meaning the user is logged in. If true display a personal message, otherwise display "Aflam" */}
              {user ? `Welcome, ${user.name}` : "Aflam"}
            </span>
          </div>

          {/* Menu for larger screens using Tailwind */}
          <div className="hidden md:flex space-x-4 items-center">
            
            {/* If the user is logged in display "History" and "Log out" buttons, else only show the "Sign In" button (Asked GPT to refactor this code block) */}
            {user ? (
              <>
                <Link
                  to="/history"
                  className="bg-white text-gray-800 border border-gray-800 hover:bg-pink-500 hover:text-white px-4 py-2 shadow-md transition duration-300"
                >
                  History
                </Link>
                <button
                  onClick={() => setUser(null)}
                  className="bg-pink-500 text-white px-4 py-2 rounded shadow-md hover:bg-pink-600"
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-pink-500 text-white px-4 py-2 rounded shadow-md hover:bg-pink-600"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Asked gen AI to create the  hamburger style menu icon */}
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown menu for mobile which displays the same buttons as above, and implements the same logic as well*/}
        {isOpen && (
          <div className="flex flex-col md:hidden items-center space-y-4 mt-4 pb-11">
            
            {user ? (
              <>
                <Link
                  to="/history"
                  className="bg-white text-gray-800 border border-gray-800 hover:bg-pink-500 hover:text-white px-4 py-2 shadow-md transition duration-300"
                >
                  History
                </Link>
                <button
                  onClick={() => setUser(null)}
                  className="dropdown-link"
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-pink-500 text-white px-4 py-2 rounded shadow-md hover:bg-pink-600"
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
