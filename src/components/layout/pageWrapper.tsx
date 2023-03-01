import React from "react";

interface pageWrapper {
  children: React.ReactNode;
}
const PageWrapper = ({children}:pageWrapper) => {
  return <div className="page-wrapper">{children}</div>;
};

export default PageWrapper;
