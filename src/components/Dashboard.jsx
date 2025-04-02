import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudSun, FaBitcoin, FaNewspaper } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 animate-gradient-move text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-lg text-center border border-gray-700 transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105">
        
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide text-white-800 animate-fade-up">
          🚀 Dashboard
        </h1>
        
        <p className="text-lg font-semibold text-gray-300 mb-6 animate-fade-up delay-100">
          Select a section to explore:
        </p>

        <div className="flex flex-col space-y-6">
          <button
            onClick={() => navigate("/weather")}
            className="flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 px-6 py-4 rounded-lg shadow-lg text-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-blue-400 hover:ring-opacity-50"
          >
            <FaCloudSun className="text-2xl animate-wiggle text-yellow-300" />
            <span>Weather</span>
          </button>

          <button
            onClick={() => navigate("/crypto")}
            className="flex items-center justify-center space-x-3 bg-yellow-500 hover:bg-yellow-600 px-6 py-4 rounded-lg shadow-lg text-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-yellow-400 hover:ring-opacity-50"
          >
            <FaBitcoin className="text-2xl animate-spin-slow text-orange-300" />
            <span>Crypto</span>
          </button>

          <button
            onClick={() => navigate("/news")}
            className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 px-6 py-4 rounded-lg shadow-lg text-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-green-400 hover:ring-opacity-50"
          >
            <FaNewspaper className="text-2xl animate-pulse text-white" />
            <span>News</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;