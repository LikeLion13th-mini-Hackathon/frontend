import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TitleSmall,
  TitleMain,
  IconCircle,
  DotWrapper,
  Dot,
  SubText,
  StartButton,
} from "../styles/Home.styles";
import { Button } from "../components/Button";

function Home() {
  // 스크롤 금지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 페이지 이동 관리
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Container>
      <TitleSmall>나만의 대학생활 코디네이터</TitleSmall>
      <TitleMain>메인{"\n"}타이틀</TitleMain>
      <IconCircle>아이콘/그림</IconCircle>
      <DotWrapper>
        <Dot />
        <Dot />
        <Dot active />
        <Dot />
      </DotWrapper>
      <SubText>학점/졸업/계획/기억관리를 한 번에!</SubText>
      <Button onClick={handleClick}>시작하기</Button>
    </Container>
  );
}

export default Home;
