import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

import Navbar from './NavBar'
import CarList from "./components/CarModels";
import Competitors from "./components/CarCompetitors";

export default function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<CarList />} />
      <Route path="/competitors/:id/:name" element={<Competitors />} />
    </Routes>
    </Router>
  );
}
