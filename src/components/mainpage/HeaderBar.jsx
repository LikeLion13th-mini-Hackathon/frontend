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
