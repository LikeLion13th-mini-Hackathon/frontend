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

function MyPage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("정상적으로 로그아웃되었습니다.");
    navigate("/");
  };

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

// 백 배포 이후 리팩토링 코드
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoIosArrowBack } from "react-icons/io";
// import { FiChevronRight } from "react-icons/fi";
// import { FaUserCircle } from "react-icons/fa";
// import {
//   Container,
//   Header,
//   ProfileSection,
//   UserInfo,
//   Name,
//   Email,
//   Divider,
//   Section,
//   SectionTitle,
//   InfoItem,
//   Label,
//   Value,
//   ChangeSection,
//   ChangeText,
//   SettingItem,
// } from "../styles/MyPage.styles";
// import Footer from "../components/Footer";
// import axios from "axios";

// function MyPage() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

// const handleLogout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
//   alert("정상적으로 로그아웃되었습니다.");
//   navigate("/");
// };

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await axios.get("http://localhost:5000/api/user/mypage", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(res.data);
//       } catch (err) {
//         console.error("⚠️ 프로필 조회 실패:", err);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (!user) return null;

//   return (
//     <>
//       <Container>
//         <Header>
//           <IoIosArrowBack
//             size={20}
//             style={{ marginRight: "16vh" }}
//             onClick={() => navigate(-1)}
//           />
//           <h3 style={{ color: "#140b77" }}>프로필</h3>
//         </Header>

//         <ProfileSection>
//           <FaUserCircle size={46} style={{ color: "#767676" }} />
//           <UserInfo>
//             <Name>{user.nickname}</Name>
//             <Email>{user.email}</Email>
//           </UserInfo>
//         </ProfileSection>

//         <Divider />

//         <Section>
//           <SectionTitle>내 정보</SectionTitle>
//           <InfoItem>
//             <Label>이메일</Label>
//             <Value>{user.email}</Value>
//           </InfoItem>
//           <InfoItem>
//             <Label>생년월일</Label>
//             <Value>{user.birthdate}</Value>
//           </InfoItem>
//           <InfoItem>
//             <Label>학과</Label>
//             <Value>{user.department}</Value>
//           </InfoItem>
//           <ChangeSection>
//             <ChangeText onClick={() => navigate("/mypage/edit-profile")}>
//               변경하기
//             </ChangeText>
//             <FiChevronRight style={{ color: "#767676" }} />
//           </ChangeSection>
//         </Section>

//         <Divider />

// <Section>
//   <SectionTitle>앱 설정</SectionTitle>
//   <SettingItem onClick={handleLogout}>
//     로그아웃 <FiChevronRight />
//   </SettingItem>
// </Section>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default MyPage;
