import { useEffect, useState } from "react";
import {
  CardWrapper,
  AvatarCircle,
  InfoWrapper,
  NameText,
  SubText,
  Divider,
  YearText,
  SettingsIcon,
} from "../../styles/MainPage.styles";
import { FiSettings } from "react-icons/fi";

function ProfileCard() {
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
      <AvatarCircle>🙂</AvatarCircle>
      <InfoWrapper>
        <NameText>{user.name}</NameText>
        <SubText>
          {user.university} {user.major} {user.studentId}학번
        </SubText>
        <Divider />
        <YearText>
          {user.status} ({user.grade}학년)
        </YearText>
      </InfoWrapper>
      <SettingsIcon>
        <FiSettings size={20} />
      </SettingsIcon>
    </CardWrapper>
  );
}

export default ProfileCard;
