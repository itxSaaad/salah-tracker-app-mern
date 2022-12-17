import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import ProgressScreen from "./screens/ProgressScreen";

function App() {
  return (
    <div className="backdrop-blur-sm">
      <Router>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/progress" element={<ProgressScreen />} />
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
