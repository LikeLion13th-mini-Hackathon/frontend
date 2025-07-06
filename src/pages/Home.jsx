import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import {
  Container,
  DotWrapper,
  Dot,
  ButtonWrapper,
  SliderWrapper,
  SlideContainer,
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
  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);
  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  // 터치로 슬라이드 넘기기
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <Container {...swipeHandlers}>
      <SliderWrapper>
        <SlideContainer $index={currentSlide}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{ flex: "0 0 100%", textAlign: "center" }}
            >
              <img
                src={slide.img}
                alt="슬라이드 이미지"
                style={{ maxWidth: "70%", height: "auto" }} // 나중에 수정 필요
              />
            </div>
          ))}
        </SlideContainer>
      </SliderWrapper>

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
