import React from "react";
import { Container } from "@mui/material";
import Resorts from "./pages/Resorts/list";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ResortsDetail from "./pages/Resorts/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resorts />} />
        <Route path={`/:id`} element={<ResortsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
