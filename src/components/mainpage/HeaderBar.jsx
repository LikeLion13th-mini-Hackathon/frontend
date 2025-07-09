// 홈 - 헤더
import { useEffect, useState } from "react";
import { getUserProfile } from "../../api/user";
import {
  HeaderWrapper,
  FlexRow,
  TextColumn,
  DateText,
  HelloText,
  HelloTextRow,
  BeeImg,
  LogoImg,
} from "../../styles/MainPage.styles";
import BlurLogo from "../../assets/BlurLogo.png";
import BeeFace from "../../assets/BeeFace.png";

function HeaderBar() {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");

  const [userName, setUserName] = useState("사용자");

  useEffect(() => {
    // 나의 프로필 정보 조회 API
    const fetchUser = async () => {
      try {
        const data = await getUserProfile();
        setUserName(data.nickname);
      } catch (err) {
        console.error("❌ 유저 정보 조회 실패:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <HeaderWrapper>
      <FlexRow>
        <TextColumn>
          <DateText>{today}</DateText>
          <HelloText>
            <HelloTextRow>
              {userName}님 안녕하세요!
              <BeeImg src={BeeFace} />
            </HelloTextRow>
          </HelloText>
        </TextColumn>
        <LogoImg src={BlurLogo} />
      </FlexRow>
    </HeaderWrapper>
  );
}

export default HeaderBar;
