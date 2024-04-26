import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimeInfo from "./pages/AnimeInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/anime/:id" element={<AnimeInfo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
