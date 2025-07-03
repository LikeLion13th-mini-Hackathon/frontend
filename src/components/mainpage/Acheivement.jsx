import React from "react";
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
import Character from "../../assets/Character.png";

function Achievement() {
  const percentage = 70;

  return (
    <GraphSection>
      <GraphTitle>나의 성취도 그래프</GraphTitle>

      <TabRow>
        <TabText>현재</TabText>
        <TabSelect>총 학기 ⌄</TabSelect>
        <TabText>학기 중</TabText>
        <TabSelect>남은 학기 ⌄</TabSelect>
        <TabText>학기 들었어요.</TabText>
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
              width: "63%", // 내부 원 크기 (조절 가능)
              height: "63%",
              borderRadius: "50%",
              backgroundColor: "#ebebeb", // 내부 회색 원
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: "translateY(25%)",
              zIndex: "-1",
            }}
          ></div>
          <CenterText>{percentage}%</CenterText>
          <SubText style={{ transform: "translateY(-350%)" }}>
            졸업까지 3학기!
          </SubText>
        </CircularProgressbarWithChildren>
      </ChartWrapper>

      <MessageWrapper>
        <SpeechBubble>이번 학기 F만 안 나오면 졸업 가능해!</SpeechBubble>
        <BeeImage src={Character} alt="Character" />
      </MessageWrapper>
    </GraphSection>
  );
}
export default Achievement;
