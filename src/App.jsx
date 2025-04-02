import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import WeatherComponent from "./components/Weather";
import CryptoComponent from "./components/CryptoApp";
import NewsComponent from "./components/News";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/weather" element={<WeatherComponent />} />
        <Route path="/crypto" element={<CryptoComponent />} />
        <Route path="/news" element={< NewsComponent/>} />
      </Routes>
    </Router>
  );
};

export default App;
