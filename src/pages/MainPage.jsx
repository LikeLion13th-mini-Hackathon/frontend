import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../styles/MainPage.styles";
import HeaderBar from "../components/mainpage/HeaderBar";
import ProfileCard from "../components/mainpage/ProfileCard";
import Achievement from "../components/mainpage/Acheivement";
import Footer from "../components/Footer";

function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 토큰 없으면 로그인 페이지로 리다이렉트
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

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
