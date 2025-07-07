import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../styles/MainPage.styles";
import HeaderBar from "../components/mainpage/HeaderBar";
import ProfileCard from "../components/mainpage/ProfileCard";
import Achievement from "../components/mainpage/Acheivement";
import Footer from "../components/Footer";

function MainPage() {
  const navigate = useNavigate();

  // 백 서버 열리면 주석 풀기 (토큰 없을 시 로그인 페이지로 리다이렉트)
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  // 임의로 넣은 프로필 데이터 (백 나오면 지우기)
  if (!localStorage.getItem("user")) {
    localStorage.setItem("token", "fake-token");
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "임상현",
        university: "인천대학교",
        major: "영어영문학과",
        grade: 3,
        status: "재학",
      })
    );
  }

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
