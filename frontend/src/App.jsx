import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
