import React from "react";

interface pageWrapper {
  children: React.ReactNode;
  sidebarActive: boolean;
}
const PageWrapper = ({ children, sidebarActive }: pageWrapper) => {
  return <div className={sidebarActive == false ? "page-wrapper" : "page-wrapper page-wrapper--active"}>{children}</div>;
};

export default PageWrapper;
