// 홈 - 프로필카드
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import {
  CardWrapper,
  InfoWrapper,
  NameText,
  SubText,
  Divider,
  YearText,
  SettingsIcon,
} from "../../styles/MainPage.styles";
import { getUserProfile } from "../../api/user";

function ProfileCard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 나의 프로필 정보 조회 API
    const fetchUser = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch (err) {
        console.error("❌ 유저 정보 조회 실패:", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return null;

  return (
    <CardWrapper>
      <FaUserCircle size={50} style={{ color: "#767676" }} />

      <InfoWrapper>
        <NameText>{user.nickname}</NameText>
        <SubText>인천대학교 {user.department}</SubText>

        <Divider />

        <YearText>재학생 ({user.grade}학년)</YearText>
      </InfoWrapper>

      <SettingsIcon onClick={() => navigate("/mypage")}>
        <FiSettings size={20} />
      </SettingsIcon>
    </CardWrapper>
  );
}

export default ProfileCard;
