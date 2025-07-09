import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  Container,
  Header,
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
import { fetchMyProfile } from "../api/user";
import { toast } from "react-toastify";

function MyPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      if (!savedUser || savedUser === "undefined") return null;
      return JSON.parse(savedUser);
    } catch (e) {
      console.warn("⚠️ user 파싱 실패:", e);
      return null;
    }
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    // 마이페이지 프로필 정보 조회
    const fetchData = async () => {
      try {
        const userData = await fetchMyProfile();
        setUser(userData);
      } catch (err) {
        console.error("⚠️ 프로필 조회 실패:", err);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("정상적으로 로그아웃되었습니다.", { autoClose: 2000 });
    navigate("/");
  };

  if (!user) return <div>Loading...</div>;

  const { nickname, email, birthdate, department } = user;

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
            <Name>{nickname}</Name>
            <Email>{email}</Email>
          </UserInfo>
        </ProfileSection>

        <Divider />

        <Section>
          <SectionTitle>내 정보</SectionTitle>
          <InfoItem>
            <Label>이메일</Label>
            <Value>{email}</Value>
          </InfoItem>
          <InfoItem>
            <Label>생년월일</Label>
            <Value>{birthdate}</Value>
          </InfoItem>
          <InfoItem>
            <Label>학과</Label>
            <Value>{department}</Value>
          </InfoItem>
          <ChangeSection>
            <ChangeText onClick={() => navigate("/mypage/edit-profile")}>
              변경하기
            </ChangeText>
            <FiChevronRight style={{ color: "#767676" }} />
          </ChangeSection>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>앱 설정</SectionTitle>
          <SettingItem onClick={handleLogout}>
            로그아웃 <FiChevronRight />
          </SettingItem>
        </Section>
      </Container>
      <Footer />
    </>
  );
}

export default MyPage;
