import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieGrid = () => {
  // initialized all the required variables with appropriate starting values
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Loads when the page renders, fetching movie data and setting visibleMovies to 4 to display 4 movies at a time
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setVisibleMovies(data.slice(0, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Next 4 movies button handler
  const handleNext = () => {
    if (startIndex + 4 < movies.length) {
      setStartIndex((prevIndex) => prevIndex + 4);
    }
  };

  // Previous 4 movies button handler, checks that the grid is not on the first page to avoid errors
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 4);
    }
  };

  // When the page is rendered sets visibleMovies to the first 4 movies and rerenders whenever the startIndex or movies changes, effectively acting as an event handler
  useEffect(() => {
    setVisibleMovies(movies.slice(startIndex, startIndex + 4));
  }, [startIndex, movies]);

  // If the data has not finished loading we display a simple "Loading..." to ensure the user that the page is loading
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-white via-red-50 to-red-100 py-10">
      <h2 className="text-black text-3xl font-bold text-center mb-6">
        What's On
      </h2>
      <div className="relative mx-auto px-4 max-w-7xl">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + 4 >= movies.length}
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &#8250;
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {visibleMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative w-full aspect-[2/3] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={movie.poster}
                alt={movie.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 md:p-4 flex justify-between items-center">
                <p className="text-white text-xs md:text-sm font-medium">
                  {movie.name}
                </p>
                <Link
                  to={`/movie/${movie.id}`}
                  className="px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs md:text-sm font-medium rounded shadow-md hover:from-red-600 hover:to-red-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieGrid;
