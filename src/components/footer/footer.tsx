import React from "react";
interface sidebarCollapse {
  sidebarActive: boolean;
}

const Footer = ({ sidebarActive }: sidebarCollapse) => {
  return (
    <div
      className={sidebarActive == false ? "footer" : "footer footer--active"}
    >
      React-sidebars
    </div>
  );
};

export default Footer;
