import { useState } from "react";
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
import Test1 from "../assets/Test1.png";
import Test2 from "../assets/Test2.png";
import Test3 from "../assets/Test3.png";
import Test4 from "../assets/Test4.png";

function Home() {
  // 페이지 이동 관리
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  // 사진 목록
  const slides = [
    { id: 1, img: Test1 },
    { id: 2, img: Test2 },
    { id: 3, img: Test3 },
    { id: 4, img: Test4 },
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
      <img
        src={slides[currentSlide].img}
        alt="슬라이드 이미지"
        style={{ width: "40vh", marginTop: "5vh", marginBottom: "5vh" }}
      />

      <DotWrapper>
        {slides.map((_, i) => (
          <Dot key={i} $active={i === currentSlide} />
        ))}
      </DotWrapper>

      <ButtonWrapper $show={currentSlide === slides.length - 1}>
        <Button onClick={handleClick}>시작하기</Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Home;
