import React from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Search from "./Search";
import Header from "./Header";
import NotFound from "./NotFound";
const MainPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainPage;
