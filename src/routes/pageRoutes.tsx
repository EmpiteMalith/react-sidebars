import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import SidebarOne from '../pages/sidebar-1';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sidebar-1" element={<SidebarOne/>} />
    </Routes>
  );
};

export default PageRoutes;
