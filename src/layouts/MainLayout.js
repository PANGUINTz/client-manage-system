import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const MainLayout = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default MainLayout;
