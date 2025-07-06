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

function ProfileCard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return null; // 로딩

  return (
    <CardWrapper>
      <FaUserCircle size={50} style={{ color: "#767676" }} />

      <InfoWrapper>
        <NameText>{user.name}</NameText>
        <SubText>
          {user.university} {user.major}
        </SubText>

        <Divider />

        <YearText>
          {user.status} ({user.grade}학년)
        </YearText>
      </InfoWrapper>

      <SettingsIcon onClick={() => navigate("/mypage")}>
        <FiSettings size={20} />
      </SettingsIcon>
    </CardWrapper>
  );
}

export default ProfileCard;
