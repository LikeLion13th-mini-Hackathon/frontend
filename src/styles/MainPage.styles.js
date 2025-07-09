import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh; // ? 정확히 화면 꽉 채우기
  overflow: hidden; // ? 스크롤 막기
  background-color: rgb(248, 250, 255);
`;

// 헤더바 스타일
export const HeaderWrapper = styled.div`
  position: relative;
  background-color: #140b77;
  padding: 24px 20px 120px;
  color: white;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`;

export const DateText = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;

export const HelloText = styled.div`
  font-size: 22px;
  font-weight: 900;
`;

export const HelloTextRow = styled.div`
  display: flex;
  align-items: center;
`;

export const BeeImg = styled.img`
  height: 4.5vh;
  margin-left: 1vh;
  margin-bottom: 1vh;
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 1vh;
  right: 2.5vh;
  height: 7.2vh;
`;

// 프로필카드 스타일
export const CardWrapper = styled.div`
  position: relative;
  z-index: 2;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 3vh;
  margin: -100px 20px 24px;
  display: flex;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  margin-left: 6vw;
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.div`
  font-weight: 900;
  font-size: 18px;
`;

export const SubText = styled.div`
  font-size: 12.5px;
  font-weight: 600;
  color: #4b80fc;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #eee;
  width: 150%;
  margin: 1vh auto;
`;

export const YearText = styled.div`
  font-size: 13px;
  font-weight: 600;
`;

export const SettingsIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// 성취도 영역 스타일
export const GraphSection = styled.div`
  position: relative;
  z-index: 3;
  padding: 1vh;
  margin-top: -5vh;
  background-color: rgb(248, 250, 255);
`;

export const GraphTitle = styled.h2`
  font-size: 20px;
  color: #140b77;
  margin: 1vh;
`;

export const TabRow = styled.div`
  display: flex;
  gap: 8px;
  margin: 1vh;
  flex-wrap: wrap;
  align-items: center;
`;

export const TabText = styled.span`
  font-size: 13px;
  color: #140b77;
  font-weight: 600;
`;

export const TabSelect = styled.button`
  font-size: 13px;
  padding: 1vw 1vh;
  color: #140b77;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ChartWrapper = styled.div`
  width: 220px;
  height: 220px;
  margin: auto;
  margin-top: 3vh;
`;

export const CenterText = styled.div`
  font-size: 46px;
  font-weight: bold;
  color: #140b77;
  text-align: center;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: -5vh;
`;

export const SpeechBubble = styled.div`
  width: 68vw;
  padding: 2vh;
  border-radius: 20px;
  position: relative;
  font-size: 13px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  overflow: hidden;
  word-wrap: break-word;
`;

// 움직이는 애니메이션
const float = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;
export const BeeImage = styled.img`
  width: 11vh;
  height: auto;
  margin-left: 1vw;
  animation: ${float} 3s ease-in-out infinite;
`;
