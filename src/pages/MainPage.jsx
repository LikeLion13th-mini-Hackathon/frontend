import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../styles/MainPage.styles";
import HeaderBar from "../components/mainpage/HeaderBar";
import ProfileCard from "../components/mainpage/ProfileCard";
import Achievement from "../components/mainpage/Acheivement";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <MainContainer>
      <HeaderBar />
      <ProfileCard />
      <Achievement />
      <Footer />
    </MainContainer>
  );
}

export default MainPage;
