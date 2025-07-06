import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../styles/MainPage.styles";
import HeaderBar from "../components/mainpage/HeaderBar";
import ProfileCard from "../components/mainpage/ProfileCard";
import Achievement from "../components/mainpage/Acheivement";
import Footer from "../components/Footer";

function MainPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   // 토큰 없으면 로그인 페이지로 리다이렉트 (백 연동 이후엔 주석 풀어야댐)
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
