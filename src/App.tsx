import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/footer";
import MainWrapper from "./components/layout/mainWrapper";
import PageWrapper from "./components/layout/pageWrapper";
import LeftMenu from "./components/sidebar/sidebar";
import TopBar from "./components/topbar/topBar";
import PageRoutes from "./routes/pageRoutes";
import "./styles/main.css";

function App() {
  const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(false);

  const sidebarToggle = () => {
    setSidebarCollapse((prevState) => !prevState);
    console.log(sidebarCollapse)
  };

  return (
    <BrowserRouter>
      <MainWrapper>
        <TopBar toggleMethod={sidebarToggle} sidebarActive={sidebarCollapse}/>
        <LeftMenu sidebarActive={sidebarCollapse} />
        <PageWrapper sidebarActive={sidebarCollapse}>
          <PageRoutes />
        </PageWrapper>
        <Footer sidebarActive={sidebarCollapse} />
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
