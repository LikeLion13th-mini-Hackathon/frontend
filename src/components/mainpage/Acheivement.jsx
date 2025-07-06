import { useEffect, useState } from "react";
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
import axios from "axios";

function Achievement() {
  const [totalSemester, setTotalSemester] = useState(8);
  const [takenSemester, setTakenSemester] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [message, setMessage] = useState("");
  const [remainingSemester, setRemainingSemester] = useState(0);
  const [beeImage, setBeeImage] = useState(Bee1);

  // 성취도 조회 (최초 렌더 시)
  useEffect(() => {
    const fetchAchievement = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/api/achievement", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const {
          totalSemester,
          currentSemester,
          achievementPercent,
          remainingSemester,
          message,
        } = res.data;

        setTotalSemester(totalSemester);
        setTakenSemester(currentSemester);
        setPercentage(achievementPercent);
        setRemainingSemester(remainingSemester);
        setMessage(message);

        if (achievementPercent < 25) setBeeImage(Bee1);
        else if (achievementPercent < 50) setBeeImage(Bee2);
        else if (achievementPercent < 75) setBeeImage(Bee3);
        else if (achievementPercent < 90) setBeeImage(Bee4);
        else setBeeImage(Bee5);
      } catch (err) {
        console.warn("⚠️ 성취도 조회 실패:", err.message);
      }
    };

    fetchAchievement();
  }, []);

  // 사용자가 select를 바꾸면 저장 요청
  useEffect(() => {
    const postAchievement = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.post(
          "http://localhost:5000/api/achievement",
          {
            totalSemester,
            takenSemester,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const { achievementPercent, remainingSemester, message } = res.data;

        setPercentage(achievementPercent);
        setRemainingSemester(remainingSemester);
        setMessage(message);

        if (achievementPercent < 25) setBeeImage(Bee1);
        else if (achievementPercent < 50) setBeeImage(Bee2);
        else if (achievementPercent < 75) setBeeImage(Bee3);
        else if (achievementPercent < 90) setBeeImage(Bee4);
        else setBeeImage(Bee5);
      } catch (err) {
        console.warn("⚠️ 성취도 저장 실패:", err.message);
      }
    };

    postAchievement();
  }, [totalSemester, takenSemester]);

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
          value={takenSemester}
          onChange={(e) => setTakenSemester(Number(e.target.value))}
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
            rotation: 5 / 8,
            strokeLinecap: "round",
            trailColor: "#f0f0f0",
            pathColor: "#140b77",
            textColor: "#140b77",
            pathTransitionDuration: 0.5,
          })}
        >
          <div
            style={{
              width: "62%",
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
            {percentage >= 100 ? "졸업!" : `졸업까지 ${remainingSemester}학기!`}
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
