import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";

interface sidebarCollapse {
  sidebarActive: boolean;
}

const LeftMenu = ({ sidebarActive }: sidebarCollapse) => {
  return (
    <div
      className={
        sidebarActive == false ? "left-menu" : "left-menu left-menu--active"
      }
    >
      <div className="brand">
        <span className="brand-logo">
          <IoLogoReact />
        </span>
        <span className="brand-text">Metronic</span>
      </div>
      <ul>
        <li>
          <NavLink to="/dashboard">
            <span className="curved-border-top"></span>
            <span className="curved-border-bottom"></span>
            <span className="left-menu__icon">
              <IoGridOutline />
            </span>
            <span className="left-menu__text">Dashbaord</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <span className="curved-border-top"></span>
            <span className="curved-border-bottom"></span>
            <span className="left-menu__icon">
              <IoPersonOutline />
            </span>
            <span className="left-menu__text">Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/charts">
            <span className="curved-border-top"></span>
            <span className="curved-border-bottom"></span>
            <span className="left-menu__icon">
              <IoBarChartOutline />
            </span>
            <span className="left-menu__text">Charts</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            <span className="curved-border-top"></span>
            <span className="curved-border-bottom"></span>
            <span className="left-menu__icon">
              <IoBriefcaseOutline />
            </span>
            <span className="left-menu__text">Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks">
            <span className="curved-border-top"></span>
            <span className="curved-border-bottom"></span>
            <span className="left-menu__icon">
              <IoCreateOutline />
            </span>
            <span className="left-menu__text">Tasks</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages">
            <span className="curved-border-top"></span>
            <span className="curved-border-bottom"></span>
            <span className="left-menu__icon">
              <IoChatbubbleOutline />
            </span>
            <span className="left-menu__text">Messages</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <span className="curved-border-top"></span>
            <span className="curved-border-bottom"></span>
            <span className="left-menu__icon">
              <IoSettingsOutline />
            </span>
            <span className="left-menu__text">Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
