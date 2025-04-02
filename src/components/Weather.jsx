import React, { useState } from "react";
import { FaSearch, FaWind, FaTint, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WeatherComponent = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiKey = "ac072c83c47828dcb174f87836e989de"; 

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500 p-6">
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <FaArrowLeft size={20} />
      </button>

      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-xl rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-300 mb-4">☁️ Weather App</h1>

        <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 p-2 text-gray-800 focus:outline-none bg-transparent"
          />
          <button type="submit" className="text-blue-600 hover:text-blue-700 transition">
            <FaSearch size={20} />
          </button>
        </form>

        {error && <p className="text-red-400 font-semibold mt-3">{error}</p>}

        {weather && (
          <div className="mt-6 text-white">
            <h2 className="text-2xl font-semibold">{weather.name}, {weather.sys.country}</h2>
            <p className="text-5xl font-bold my-2">{Math.round(weather.main.temp)}°C</p>
            <p className="capitalize text-lg">{weather.weather[0].description}</p>

            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="flex items-center justify-center space-x-2">
                <FaTint className="text-blue-300" /> <span>{weather.main.humidity}%</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <FaWind className="text-gray-300" /> <span>{weather.wind.speed} m/s</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherComponent;
