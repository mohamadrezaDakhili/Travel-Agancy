import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bucket from "../pages/Bucket/Bucket";
import ResortsDetail from "../pages/Resorts/detail";
import Resorts from "../pages/Resorts/list";

const TravelAgancyRoutes = () => {
  return (
    <Routes>
      <Route path={`/bucket`} element={<Bucket />} />
      <Route path={`/:id`} element={<ResortsDetail />} />
      <Route path="/" element={<Resorts />} />
    </Routes>
  );
};

export default TravelAgancyRoutes;
