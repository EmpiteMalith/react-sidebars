import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <ul>
        <li>
          <NavLink to="/dashboard">
            <span>
              <IoGridOutline />
            </span>
            <span>Dashbaord</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <span>
              <IoPersonOutline />
            </span>
            <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/charts">
            <span>
              <IoBarChartOutline />
            </span>
            <span>Charts</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            <span>
              <IoBriefcaseOutline />
            </span>
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks">
            <span>
              <IoCreateOutline />
            </span>
            <span>Tasks</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages">
            <span>
              <IoChatbubbleOutline />
            </span>
            <span>Messages</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <span>
              <IoSettingsOutline />
            </span>
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
