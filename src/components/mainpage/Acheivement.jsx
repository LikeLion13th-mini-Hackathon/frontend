import { useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  GraphSection,
  GraphTitle,
  TabRow,
  TabText,
  TabSelect,
  ChartWrapper,
  CenterText,
  SubText,
  MessageWrapper,
  SpeechBubble,
  BeeImage,
} from "../../styles/MainPage.styles";
import Bee1 from "../../assets/Bee1.png";
import Bee2 from "../../assets/Bee2.png";
import Bee3 from "../../assets/Bee3.png";
import Bee4 from "../../assets/Bee4.png";
import Bee5 from "../../assets/Bee5.png";

function Achievement() {
  const [totalSemester, setTotalSemester] = useState(8); // 총 학기
  const [remainingSemester, setRemainingSemester] = useState(1); // 남은 학기
  const percentage = Math.round((remainingSemester / totalSemester) * 100);
  // 성취도에 따른 메시지 변화
  let message = "";
  if (percentage < 25) {
    message =
      "드디어 시작이네! 이제부터 너만의 계획이 만들어질 거야. 나랑 멋지게 채워보자.";
  } else if (percentage < 50) {
    message =
      "시작이 반이야! 이제 슬슬 몸 풀렸으니까 한 단계씩 차근차근 가보자~";
  } else if (percentage < 75) {
    message =
      "벌써 절반 넘게 했잖아! 지금부터가 진짜야. 기세 꺾이지 말고 계속 가보자!";
  } else if (percentage < 90) {
    message = "슬슬 끝이 보여! 방심 금지~ 이때 삐끗하면 다음에 더 봐야 돼..";
  } else {
    message = "졸업까지 다 왔네. 미리 축하해!";
  }
  // 성취도에 따른 캐릭터 변화
  let beeImage = Bee1;
  if (percentage < 25) {
    beeImage = Bee1;
  } else if (percentage < 50) {
    beeImage = Bee2;
  } else if (percentage < 75) {
    beeImage = Bee3;
  } else if (percentage < 90) {
    beeImage = Bee4;
  } else {
    beeImage = Bee5;
  }

  return (
    <GraphSection>
      <GraphTitle>나의 성취도 그래프</GraphTitle>

      <TabRow>
        <TabText>현재</TabText>
        <TabSelect
          as="select"
          value={totalSemester}
          onChange={(e) => setTotalSemester(Number(e.target.value))}
        >
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}학기
            </option>
          ))}
        </TabSelect>
        <TabText>중</TabText>

        <TabSelect
          as="select"
          value={remainingSemester}
          onChange={(e) => setRemainingSemester(Number(e.target.value))}
        >
          {[...Array(totalSemester + 1)].map((_, i) => (
            <option key={i} value={i}>
              {i}학기
            </option>
          ))}
        </TabSelect>

        <TabText>들었어요.</TabText>
      </TabRow>

      <ChartWrapper>
        <CircularProgressbarWithChildren
          value={percentage}
          circleRatio={0.75}
          strokeWidth={14}
          styles={buildStyles({
            rotation: 5 / 8, // 시작 위치
            strokeLinecap: "round",
            trailColor: "#f0f0f0",
            pathColor: "#140b77",
            textColor: "#140b77",
            pathTransitionDuration: 0.5,
          })}
        >
          <div
            style={{
              width: "62%", // 내부 원 크기 (조절 가능)
              height: "63%",
              borderRadius: "50%",
              backgroundColor: "#ebebeb",
              transform: "translateY(25%)",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              zIndex: "-1",
            }}
          ></div>
          <CenterText>{percentage}%</CenterText>
          <SubText style={{ transform: "translateY(-450%)" }}>
            {percentage >= 100
              ? "졸업!"
              : `졸업까지 ${totalSemester - remainingSemester}학기!`}
          </SubText>
        </CircularProgressbarWithChildren>
      </ChartWrapper>

      <MessageWrapper>
        <SpeechBubble>{message}</SpeechBubble>
        <BeeImage src={beeImage} alt="Character" />
      </MessageWrapper>
    </GraphSection>
  );
}
export default Achievement;
