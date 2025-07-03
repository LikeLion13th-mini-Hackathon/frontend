import React from "react";
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
  return (
    <CardWrapper>
      <AvatarCircle>🙂</AvatarCircle>
      <InfoWrapper>
        <NameText>임상현</NameText>
        <SubText>인천대학교 영어영문학과 21학번</SubText>
        <Divider />
        <YearText>재학생 (4학년)</YearText>
      </InfoWrapper>
      <SettingsIcon>
        <FiSettings size={20} />
      </SettingsIcon>
    </CardWrapper>
  );
}

export default ProfileCard;
