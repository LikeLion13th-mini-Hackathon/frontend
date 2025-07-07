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
        <SubText>인천대학교 {user.major}</SubText>

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

// 백 서버 이후 리팩토링 코드
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import { FiSettings } from "react-icons/fi";
// import {
//   CardWrapper,
//   InfoWrapper,
//   NameText,
//   SubText,
//   Divider,
//   YearText,
//   SettingsIcon,
// } from "../../styles/MainPage.styles";
// import axios from "axios";

// function ProfileCard() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await axios.get("http://localhost:5000/api/user/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(res.data);
//       } catch (err) {
//         console.error("프로필 정보 불러오기 실패:", err);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (!user) return null; // 로딩 중 또는 에러

//   return (
//     <CardWrapper>
//       <FaUserCircle size={50} style={{ color: "#767676" }} />

//       <InfoWrapper>
//         <NameText>{user.nickname}</NameText>
//         <SubText>인천대학교 {user.department}</SubText>

//         <Divider />

//         <YearText>재학생 ({user.grade}학년)</YearText>
//       </InfoWrapper>

//       <SettingsIcon onClick={() => navigate("/mypage")}>
//         <FiSettings size={20} />
//       </SettingsIcon>
//     </CardWrapper>
//   );
// }

// export default ProfileCard;
