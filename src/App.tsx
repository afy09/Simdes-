import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/Pages";
import PageAmbulan from "./LandingPage/Pages/ambulan/pageambulan";
// import PageUmkm from "./LandingPage/Pages/umkm/PageUmkm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/darurat" element={<PageAmbulan />} />
        {/* <Route path="/umkm" element={<PageUmkm />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
