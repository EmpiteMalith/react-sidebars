import React from 'react'
import { Routes, Route } from "react-router-dom";
import Charts from '../pages/charts';
import Dashboard from '../pages/dashboard';
import HomePage from "../pages/home";
import Messages from '../pages/messages';
import Profile from '../pages/profile';
import Projects from '../pages/projects';
import Settings from '../pages/settings';
import SidebarOne from '../pages/sidebar-1';
import Tasks from '../pages/tasks';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sidebar-1" element={<SidebarOne/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/charts" element={<Charts/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/tasks" element={<Tasks/>} />
      <Route path="/messages" element={<Messages/>} />
      <Route path="/settings" element={<Settings/>} />
    </Routes>
  );
};

export default PageRoutes;
