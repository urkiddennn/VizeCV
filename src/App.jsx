import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./views/HeroPage";
import DashboardPage from "./views/Dashboard/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
