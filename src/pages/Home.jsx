import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import {
  Container,
  TitleSmall,
  TitleMain,
  DotWrapper,
  Dot,
  SubText,
  ButtonWrapper,
} from "../styles/Home.styles";
import { Button } from "../components/Button";
import Bee1 from "../assets/Bee1.png";
import Bee2 from "../assets/Bee2.png";
import Bee3 from "../assets/Bee3.png";
import Bee4 from "../assets/Bee4.png";

function Home() {
  // 페이지 이동 관리
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  // 사진 목록
  const slides = [
    { id: 1, img: Bee1 },
    { id: 2, img: Bee2 },
    { id: 3, img: Bee3 },
    { id: 4, img: Bee4 },
  ];

  // 슬라이드 관리
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // 터치로 슬라이드 넘기기
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <Container {...swipeHandlers} onClick={handleNext}>
      <TitleSmall>나만의 대학생활 코디네이터</TitleSmall>
      <TitleMain>메인{"\n"}타이틀</TitleMain>

      <img
        src={slides[currentSlide].img}
        alt="슬라이드 이미지"
        style={{ width: "20vh", marginBottom: "4vh" }}
      />

      <DotWrapper>
        {slides.map((_, i) => (
          <Dot key={i} active={i === currentSlide} />
        ))}
      </DotWrapper>

      <SubText>학점/졸업/계획/기억관리를 한 번에!</SubText>

      <ButtonWrapper show={currentSlide === slides.length - 1}>
        <Button onClick={handleClick}>시작하기</Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Home;
