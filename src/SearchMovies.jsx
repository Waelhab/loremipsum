import React, { useState, useEffect } from "react";
import cinemaLocations from "./data/cinemaLocations.json"; // Path to cinema locations JSON
import movieData from "../data.json"; // Path to movie data JSON

const SearchMovies = () => {
  // We initialize many data related variables as well as user selection variables 
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinemaId, setSelectedCinemaId] = useState("");
  const [selectedCinemaName, setSelectedCinemaName] = useState("");
  const [showTimes, setShowTimes] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  // Load cities and cinemas from JSON
  useEffect(() => {
    setCities(cinemaLocations.cities); // Load cities from cinemaLocations.json
  }, []);

  // Whn the user selects a city, update related variables and reset fields to avoid any errors when selecting a city more than once
  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);
    setSelectedCinemaId(""); // Reset cinema selection
    setSelectedCinemaName("");
    setShowTimes([]); // Reset showtimes
    setIsSearchClicked(false);

    // Find cinemas for the selected city
    const selectedCityData = cities.find((city) => city.name === cityName);
    if (selectedCityData) {
      // We format the statement in this way to ensure if the cinemas is null, we just set the cinemas variable in our app to an empty array
      setCinemas(selectedCityData.cinemas || []);
    } else {
      setCinemas([]);
    }
  };

  // Handles the logic behinnd the cinema change dropdown menu
  const handleCinemaChange = (event) => {
    const cinemaId = event.target.value;
    const selectedCinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);

    setSelectedCinemaId(cinemaId);
    setSelectedCinemaName(selectedCinema ? selectedCinema.name : "");
    setShowTimes([]); // Reset showtimes
    setIsSearchClicked(false);
  };

  // After the search button is clicked, this function is called and handles the logic of correlating the movie information with what the user requested (Refactored by GPT)
  const handleSearch = () => {
    if (!selectedCity || !selectedCinemaId) {
      alert("Please select both a city and a cinema.");
      return;
    }

    setIsSearchClicked(true); // Button clicked

    // Filter movies based on the selected cinemaId
    const cinemaShowTimes = movieData.reduce((acc, movie) => {
      // Find showtimes for the selected cinemaId
      const showTimesForCinema = movie.showTimes.cinemas?.find(
        (cinema) => cinema.cinemaId === selectedCinemaId
      );

      if (showTimesForCinema) {
        acc.push({
          movieName: movie.name,
          moviePoster: movie.poster,
          movieAgeRating: movie.ageRating,
          showTimes: showTimesForCinema.dates, // Include all dates and times for this cinema
        });
      }

      return acc;
    }, []);

    setShowTimes(cinemaShowTimes); // Set all collected showtimes
  };

  return (
    <div className="bg-gray-900 text-white p-6">
      {/* Dropdowns */}
      <div className="flex flex-wrap justify-center items-center space-x-4 mb-6">
        {/* City Dropdown */}
        <div>
          <label htmlFor="city" className="sr-only">
            Select Your City
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="p-3 rounded-lg bg-gray-800 text-white focus:ring focus:ring-pink-500"
          >
            <option value="">Select Your City</option>
            {/* Create a new array with the values for the cities*/}
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Cinema Dropdown */}
        <div>
          <label htmlFor="cinema" className="sr-only">
            Select Your Cinema
          </label>
          <select
            id="cinema"
            value={selectedCinemaId}
            onChange={handleCinemaChange}
            className="p-3 rounded-lg bg-gray-800 text-white focus:ring focus:ring-pink-500"
            disabled={!selectedCity || cinemas.length === 0}
          >
            <option value="">Select Your Cinema</option>
            {/* Create a new array with the values for the cinema names */}
            {cinemas.map((cinema) => (
              <option key={cinema.cinemaId} value={cinema.cinemaId}>
                {cinema.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div>
  <button
    onClick={handleSearch}
    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg focus:ring focus:ring-pink-500 mt-6 md:mt-0"
  >
    Find Times And Book
  </button>
</div>

      </div>

      {/* Showtimes Section */}
      <div className="max-w-6xl mx-auto mt-10">
        {isSearchClicked && showTimes.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Showtimes for {selectedCinemaName}, {selectedCity}
            </h2>
            <div className="space-y-6">
              {/* The below code uses map to apply the logic for each showtime section */}
              {showTimes.map((movie, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-md">
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
                    <img
                      src={movie.moviePoster}
                      alt={movie.movieName}
                      className="w-full md:w-20 h-auto rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-pink-500">
                        {movie.movieName}
                      </h3>
                      <p className="text-gray-400">
                        Age Rating: {movie.movieAgeRating}
                      </p>
                    </div>
                  </div>
                  {movie.showTimes.map((showTime, idx) => (
                    <div key={idx} className="mb-4">
                      <p className="text-gray-400 mb-2">
                        <strong>{showTime.date}</strong>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {showTime.times.map((time, timeIdx) => (
                          <button
                            key={timeIdx}
                            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md shadow-md"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* If there are no showtimes found for the cinema, display that to the user */}
        {isSearchClicked && showTimes.length === 0 && (
          <p className="text-center text-gray-400">
            No showtimes available for {selectedCinemaName}.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchMovies;
