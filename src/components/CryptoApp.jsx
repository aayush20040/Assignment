import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CryptoComponent = ({ onBack }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin&order=market_cap_desc&per_page=3&page=1&sparkline=false'
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch crypto data');
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <FaArrowLeft size={20} />
      </button>
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-extrabold">Crypto Prices</h2>
        </div>

        {loading && <p className="text-center animate-pulse">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <div className="space-y-6">
            {cryptoData.map((coin) => (
              <div 
                key={coin.id} 
                className="flex justify-between items-center bg-gray-700 p-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-600"
              >
                <div>
                  <h3 className="text-lg font-semibold">{coin.name}</h3>
                  <p className="text-sm text-gray-300">{coin.symbol.toUpperCase()}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">${coin.current_price.toLocaleString()}</p>
                  <p
                    className={`text-sm font-medium ${
                      coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}% (24h)
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoComponent;