import {
  HeaderWrapper,
  TopRow,
  DateText,
  HelloText,
} from "../../styles/MainPage.styles";

function HeaderBar() {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");
  // localStorage에서 유저 정보 가져오기
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "사용자";

  return (
    <HeaderWrapper>
      <TopRow>
        <DateText>{today}</DateText>
      </TopRow>
      <HelloText>{userName}님, 안녕하세요!</HelloText>
    </HeaderWrapper>
  );
}

export default HeaderBar;

// 백 서버 오픈 시 리팩토링 코드
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   HeaderWrapper,
//   TopRow,
//   DateText,
//   HelloText,
// } from "../../styles/MainPage.styles";

// function HeaderBar() {
//   const [userName, setUserName] = useState("사용자");

//   useEffect(() => {
//     const fetchUserName = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await axios.get("http://localhost:5000/api/user/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUserName(res.data.name);
//       } catch (err) {
//         console.warn("사용자 이름 불러오기 실패:", err.message);
//       }
//     };

//     fetchUserName();
//   }, []);

//   const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");

//   return (
//     <HeaderWrapper>
//       <TopRow>
//         <DateText>{today}</DateText>
//       </TopRow>
//       <HelloText>{userName}님, 안녕하세요!</HelloText>
//     </HeaderWrapper>
//   );
// }

// export default HeaderBar;
