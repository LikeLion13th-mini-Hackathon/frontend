import { useEffect, useState } from "react";
import axios from "axios";
import {
  HeaderWrapper,
  FlexRow,
  TextColumn,
  DateText,
  HelloText,
} from "../../styles/MainPage.styles";
import BlurLogo from "../../assets/BlurLogo.png";
import BeeFace from "../../assets/BeeFace.png";

function HeaderBar() {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");

  const [userName, setUserName] = useState("사용자");

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "http://34.227.53.193:8081/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserName(res.data.nickname);
        // 필요 시 부가 정보 저장: res.data.department, grade 등
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
            {userName}님, 안녕하세요!
            <img src={BeeFace} style={{ height: "3.2vh", marginLeft: "1vh" }} />
          </HelloText>
        </TextColumn>
        <img src={BlurLogo} style={{ height: "7.2vh" }} />
      </FlexRow>
    </HeaderWrapper>
  );
}

export default HeaderBar;
