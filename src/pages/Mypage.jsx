import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

import {
  Container,
  Header,
  Title,
  ProfileSection,
  UserInfo,
  Name,
  Email,
  Divider,
  Section,
  SectionTitle,
  InfoItem,
  Label,
  Value,
  ChangeSection,
  ChangeText,
  SettingItem,
} from "../styles/MyPage.styles";
import Footer from "../components/Footer";

function MyPage() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Header>
          <IoIosArrowBack
            size={20}
            style={{ marginRight: "16vh" }}
            onClick={() => navigate(-1)}
          />
          <h3 style={{ color: "#140b77" }}>프로필</h3>
        </Header>

        <ProfileSection>
          <FaUserCircle size={46} style={{ color: "#767676" }} />
          <UserInfo>
            <Name>임상현</Name>
            <Email>test@gmail.com</Email>
          </UserInfo>
        </ProfileSection>

        <Divider />

        <Section>
          <SectionTitle>내 정보</SectionTitle>
          <InfoItem>
            <Label>이메일</Label>
            <Value>test@naver.com</Value>
          </InfoItem>
          <InfoItem>
            <Label>생년월일</Label>
            <Value>2000.00.00</Value>
          </InfoItem>
          <InfoItem>
            <Label>학과</Label>
            <Value>영어영문학과</Value>
          </InfoItem>
          <ChangeSection>
            <ChangeText onClick={() => alert("학과 변경")}>변경하기</ChangeText>
            <FiChevronRight style={{ color: "#767676" }} />
          </ChangeSection>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>앱 설정</SectionTitle>
          <SettingItem onClick={() => alert("로그아웃")}>
            로그아웃 <FiChevronRight />
          </SettingItem>
          <SettingItem onClick={() => alert("회원 탈퇴")}>
            회원 탈퇴 <FiChevronRight />
          </SettingItem>
        </Section>
      </Container>
      <Footer />
    </>
  );
}

export default MyPage;
