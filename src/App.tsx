import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/footer";
import MainWrapper from "./components/layout/mainWrapper";
import PageWrapper from "./components/layout/pageWrapper";
import TopBar from "./components/topbar/topBar";
import PageRoutes from "./routes/pageRoutes";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <TopBar />
        <PageWrapper>
          <PageRoutes />
        </PageWrapper>
        <Footer />
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
