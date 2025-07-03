import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 14vh;
`;

// 헤더바 스타일
export const HeaderWrapper = styled.div`
  background-color: #140b77;
  padding: 20px;
  padding-bottom: 18vh;
  color: white;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateText = styled.div`
  margin-top: 1vh; // 조정 필요
  font-size: 14px;
  opacity: 0.8;
`;

export const HelloText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

// 프로필카드 스타일
export const CardWrapper = styled.div`
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 3vh;
  margin: 2.5vh; // 조정 필요.. 아마도
  position: relative;
  display: flex;
  align-items: center;
  transform: translateY(-115%); // 조정 필요?
`;

export const AvatarCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const InfoWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const SubText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #4b80fc;
  margin-top: 2px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #eee;
  margin: 8px 0;
  width: 120%;
`;

export const YearText = styled.div`
  font-size: 13px;
  font-weight: 500;
`;

export const SettingsIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

// 성취도 영역 스타일
export const GraphSection = styled.div`
  padding: 1.6vh;
  margin-top: 3vh;
  transform: translateY(-37%); // 플리즈
`;

export const GraphTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
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
  padding: 6px 12px;
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
  width: 210px;
  height: 215px;
  margin: auto auto;
  margin-top: 3vh;
`;

export const CenterText = styled.div`
  font-size: 38px;
  font-weight: bold;
  color: #140b77;
  transform: translateY(-150%);
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 6vh; // 제발 다른 폰도 이래라..
  transform: translateY(-30%);
`;

export const SpeechBubble = styled.div`
  padding: 20px 20px;
  border-radius: 20px;
  position: relative;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transform: translateY(-10%);
`;

export const BeeImage = styled.img`
  width: 70px;
  height: auto;
  margin-left: 2vw;
`;
