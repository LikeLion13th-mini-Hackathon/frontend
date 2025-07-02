import { React, useEffect } from "react";
import { Container, TitleSmall, TitleMain, IconCircle, DotWrapper, Dot, SubText, StartButton } from "../styles/Home.styles";
import { Button } from "../components/button";

function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';  // 스크롤 금지
    return () => {
      document.body.style.overflow = 'auto';
  };
}, []);

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
      <Button>시작하기</Button>
    </Container>
  );
}

export default Home;
