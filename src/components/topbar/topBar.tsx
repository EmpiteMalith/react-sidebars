import React from "react";
import { IoMenuOutline } from "react-icons/io5";

interface sideToggle {
  toggleMethod: any;
  sidebarActive: boolean;
}

const TopBar = ({ toggleMethod, sidebarActive }: sideToggle) => {
  return (
    <div className={sidebarActive == false ? "top-bar" : "top-bar top-bar--active"}>
      <span className="hamburger-menu" onClick={toggleMethod}>
        <IoMenuOutline />
      </span>
    </div>
  );
};

export default TopBar;
