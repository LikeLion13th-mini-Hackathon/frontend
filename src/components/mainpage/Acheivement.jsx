// 홈 - 성취도 영역
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
import { fetchAchievement, postAchievement } from "../../api/achievement";

function Achievement() {
  const [totalSemester, setTotalSemester] = useState(8);
  const [takenSemester, setTakenSemester] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [message, setMessage] = useState("");
  const [remainingSemester, setRemainingSemester] = useState(0);
  const [beeImage, setBeeImage] = useState(Bee1);
  const [isFetched, setIsFetched] = useState(false); // 조회 완료 여부 확인

  const updateBeeImage = (percent) => {
    if (percent < 25) setBeeImage(Bee1);
    else if (percent < 50) setBeeImage(Bee2);
    else if (percent < 75) setBeeImage(Bee3);
    else if (percent < 90) setBeeImage(Bee4);
    else setBeeImage(Bee5);
  };

  useEffect(() => {
    // 나의 성취도 데이터 조회 API
    const loadData = async () => {
      try {
        const data = await fetchAchievement();

        setTotalSemester(data.totalSemester);
        setTakenSemester(data.currentSemester);
        setPercentage(data.achievementPercent);
        setRemainingSemester(data.remainingSemester);
        setMessage(data.message);
        updateBeeImage(data.achievementPercent);
        setIsFetched(true); // 조회 완료 후 true 설정
      } catch (err) {
        console.warn("❌ 나의 성취도 데이터 조회 실패:", err.message);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!isFetched) return; // 조회 전이면 실행하지 않음

    // 나의 성취도 데이터 등록 & 수정 API
    const saveData = async () => {
      try {
        const data = await postAchievement(totalSemester, takenSemester);
        setPercentage(data.achievementPercent);
        setRemainingSemester(data.remainingSemester);
        setMessage(data.message);
        updateBeeImage(data.achievementPercent);
      } catch (err) {
        console.warn("❌ 나의 성취도 데이터 등록 & 수정 실패:", err.message);
      }
    };

    saveData();
  }, [totalSemester, takenSemester, isFetched]);

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
            trailColor: "#e5e7ec",
            pathColor: "#140b77",
            textColor: "#140b77",
            pathTransitionDuration: 0.5,
          })}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              height: "60%",
              borderRadius: "50%",
              backgroundColor: "#e5e7ec",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              zIndex: -1,
            }}
          />
          <CenterText>{percentage}%</CenterText>
          <SubText style={{ marginBottom: "10px" }}>
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
