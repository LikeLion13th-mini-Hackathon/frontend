import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../styles/MainPage.styles";
import HeaderBar from "../components/mainpage/HeaderBar";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <MainContainer>
      <HeaderBar />
      <Footer />
    </MainContainer>
  );
}

export default MainPage;
