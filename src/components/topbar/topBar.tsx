import React from "react";
import { IoMenuOutline } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="top-bar">
      <span className="hamburger-menu">
        <IoMenuOutline />
      </span>
    </div>
  );
};

export default TopBar;
