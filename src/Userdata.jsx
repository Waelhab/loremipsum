import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const UserData = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // Access user credentials from context

  // Replace this with your `moviesWatched` array

  const moviesWatched = [
    {
      id: 1,
      name: "The Dark Knight",
      genre: "Action",
      trailer: "#",
      ageRating: "13+",
      language: "English",
      date: "2008-07-18",
      runtime: 152,
      ticketPrice: 60,
      discountPrice: 50,
      liked: false,
    },
    {
      id: 2,
      name: "Inception",
      genre: "Sci-Fi",
      trailer: "#",
      ageRating: "13+",
      language: "English",
      date: "2010-07-16",
      runtime: 148,
      ticketPrice: 55,
      discountPrice: 45,
      liked: true,
    },
    {
      id: 3,
      name: "The Lion King",
      genre: "Animation",
      trailer: "#",
      ageRating: "7+",
      language: "English",
      date: "1994-06-24",
      runtime: 89,
      ticketPrice: 40,
      discountPrice: 30,
      liked: true,
    },
    {
      id: 4,
      name: "The Shawshank Redemption",
      genre: "Drama",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1994-09-22",
      runtime: 142,
      ticketPrice: 50,
      discountPrice: 40,
      liked: true,
    },
    {
      id: 5,
      name: "Titanic",
      genre: "Romance",
      trailer: "#",
      ageRating: "13+",
      language: "English",
      date: "1997-12-19",
      runtime: 195,
      ticketPrice: 70,
      discountPrice: 60,
      liked: true,
    },
    {
      id: 6,
      name: "Avatar",
      genre: "Sci-Fi",
      trailer: "#",
      ageRating: "13+",
      language: "English",
      date: "2009-12-18",
      runtime: 162,
      ticketPrice: 65,
      discountPrice: 55,
      liked: true,
    },
    {
      id: 7,
      name: "Gladiator",
      genre: "Action",
      trailer: "#",
      ageRating: "13+",
      language: "English",
      date: "2000-05-05",
      runtime: 155,
      ticketPrice: 50,
      discountPrice: 40,
      liked: true,
    },
    {
      id: 8,
      name: "The Matrix",
      genre: "Sci-Fi",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1999-03-31",
      runtime: 136,
      ticketPrice: 60,
      discountPrice: 50,
      liked: true,
    },
    {
      id: 9,
      name: "The Godfather",
      genre: "Crime",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1972-03-24",
      runtime: 175,
      ticketPrice: 80,
      discountPrice: 70,
      liked: true,
    },
    {
      id: 10,
      name: "Pulp Fiction",
      genre: "Crime",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1994-10-14",
      runtime: 154,
      ticketPrice: 60,
      discountPrice: 50,
      liked: true,
    },
    {
      id: 11,
      name: "The Lord of the Rings: The Fellowship of the Ring",
      genre: "Fantasy",
      trailer: "#",
      ageRating: "13+",
      language: "English",
      date: "2001-12-19",
      runtime: 178,
      ticketPrice: 65,
      discountPrice: 55,
      liked: true,
    },
    {
      id: 12,
      name: "Forrest Gump",
      genre: "Drama",
      trailer: "#",
      ageRating: "13+",
      language: "English",
      date: "1994-07-06",
      runtime: 142,
      ticketPrice: 50,
      discountPrice: 40,
      liked: true,
    },
    {
      id: 13,
      name: "Schindler's List",
      genre: "History",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1993-11-30",
      runtime: 195,
      ticketPrice: 60,
      discountPrice: 50,
      liked: true,
    },
    {
      id: 14,
      name: "The Silence of the Lambs",
      genre: "Thriller",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1991-02-14",
      runtime: 118,
      ticketPrice: 45,
      discountPrice: 35,
      liked: true,
    },
    {
      id: 15,
      name: "Goodfellas",
      genre: "Crime",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1990-09-19",
      runtime: 146,
      ticketPrice: 55,
      discountPrice: 45,
      liked: true,
    },
    {
      id: 16,
      name: "Saving Private Ryan",
      genre: "War",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1998-07-24",
      runtime: 169,
      ticketPrice: 60,
      discountPrice: 50,
      liked: true,
    },
    {
      id: 17,
      name: "The Green Mile",
      genre: "Drama",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1999-12-10",
      runtime: 189,
      ticketPrice: 50,
      discountPrice: 40,
      liked: true,
    },
    {
      id: 18,
      name: "Braveheart",
      genre: "Action",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "1995-05-24",
      runtime: 178,
      ticketPrice: 50,
      discountPrice: 40,
      liked: true,
    },
    {
      id: 19,
      name: "Star Wars: Episode V - The Empire Strikes Back",
      genre: "Sci-Fi",
      trailer: "#",
      ageRating: "7+",
      language: "English",
      date: "1980-05-21",
      runtime: 124,
      ticketPrice: 45,
      discountPrice: 35,
      liked: true,
    },
    {
      id: 20,
      name: "The Departed",
      genre: "Crime",
      trailer: "#",
      ageRating: "18+",
      language: "English",
      date: "2006-10-06",
      runtime: 151,
      ticketPrice: 55,
      discountPrice: 45,
      liked: true,
    },
  ];

  // Mock user credential object for demonstration
  const userCredentials = {
    Wael: {
      email: "wael@gmail.com",
      password: "ps1",
      movies: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    },
    ahmed: {
      email: "ahmed@gmail.com",
      password: "ps2",
      movies: [3, 15],
    },
    ali: {
      email: "ali@gmail.com",
      password: "ps3",
      movies: [,10,11,14,15],
    },
  };

  const allowedMovieIds = userCredentials[user?.name]?.movies || []; // Get allowed movie IDs
  const filteredMovies = moviesWatched.filter((movie) => allowedMovieIds.includes(movie.id));

  const totalRuntimeMinutes = filteredMovies.reduce((sum, movie) => sum + movie.runtime, 0);
  const totalRuntimeHours = (totalRuntimeMinutes / 60).toFixed(1);
  const totalTicketCost = filteredMovies.reduce((sum, movie) => sum + movie.ticketPrice, 0);
  const totalSavings = filteredMovies.reduce(
    (sum, movie) => sum + (movie.ticketPrice - movie.discountPrice),
    0
  );

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMovies = filteredMovies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen py-8 px-4">
      {/* Welcome Message */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold">
          Welcome, {user ? user.name : "Guest"}!
        </h1>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Summary Section */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-300">Total Hours Watched</h3>
              <p className="text-3xl font-bold text-blue-400">{totalRuntimeHours} hrs</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-300">Total Ticket Cost</h3>
              <p className="text-3xl font-bold text-green-400">{totalTicketCost} SAR</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-300">Total Savings</h3>
              <p className="text-3xl font-bold text-red-400">{totalSavings} SAR</p>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-300 mb-8">
            <h2 className="text-2xl">New user, no history available!</h2>
          </div>
        )}

        {/* Movies Watched Table */}
        {filteredMovies.length > 0 && (
          <div className="bg-gray-800 rounded-lg shadow-md p-6 overflow-x-auto">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">Movies Watched</h2>
            <table className="w-full table-auto border-collapse text-gray-300 text-sm md:text-base">
              <thead>
                <tr className="text-left bg-gray-700">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Genre</th>
                  <th className="px-4 py-2">Trailer</th>
                  <th className="px-4 py-2">Age Rating</th>
                  <th className="px-4 py-2">Language</th>
                  <th className="px-4 py-2 whitespace-nowrap">Watched Date</th>
                  <th className="px-4 py-2">Runtime (min)</th>
                  <th className="px-4 py-2">Ticket Price (SAR)</th>
                  <th className="px-4 py-2">Discount Price (SAR)</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentMovies.map((movie, index) => (
                  <tr key={index} className="border-t border-gray-600">
                    <td className="px-4 py-2">{movie.name}</td>
                    <td className="px-4 py-2">{movie.genre}</td>
                    <td className="px-4 py-2">
                      <a
                        href={movie.trailer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        Watch Trailer
                      </a>
                    </td>
                    <td className="px-4 py-2">{movie.ageRating}</td>
                    <td className="px-4 py-2">{movie.language}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{movie.date}</td>
                    <td className="px-4 py-2">{movie.runtime}</td>
                    <td className="px-4 py-2">{movie.ticketPrice}</td>
                    <td className="px-4 py-2">{movie.discountPrice}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-3 py-1 rounded-full text-white ${
                          movie.liked ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {movie.liked ? "Liked" : "Disliked"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <p className="text-gray-300">
                Page {currentPage} of {Math.ceil(filteredMovies.length / itemsPerPage)}
              </p>
              <button
                disabled={currentPage === Math.ceil(filteredMovies.length / itemsPerPage)}
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserData;
