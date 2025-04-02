import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewsComponent = ({ onBack }) => {
  const [newsData, setNewsData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiKey = '5d790cb2296043f7bc422b3815930119';

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=5`
        );
        if (response.data.articles.length === 0) {
          throw new Error('No news articles found');
        }
        setNewsData(response.data.articles);
      } catch (err) {
        console.error('Error fetching news:', err.response ? err.response.data : err.message);
        setError('Failed to fetch news data: ' + (err.response ? err.response.data.message : err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  const toggleFavorite = (article) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.url === article.url)) {
        return prevFavorites.filter((fav) => fav.url !== article.url);
      } else {
        return [...prevFavorites, article];
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white rounded-2xl shadow-2xl p-6 w-full max-w-lg relative"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-5 left-5 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <ArrowLeft size={20} className="text-gray-800" />
        </button>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-extrabold text-white ml-12">Top 5 Daily News</h2>
        </div>

        {loading && <p className="text-center text-lg animate-pulse">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <div className="space-y-6">
            {newsData.map((article, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-4 rounded-lg shadow-md transition-all relative"
              >
                <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{article.source.name}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm hover:underline mt-2 block"
                >
                  Read more →
                </a>
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(article)}
                  className="absolute top-2 right-2 p-2 rounded-full transition"
                >
                  <Heart size={20} className={favorites.some((fav) => fav.url === article.url) ? "text-red-500" : "text-gray-400"} />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NewsComponent;