import React from "react";
import {
  HeaderWrapper,
  TopRow,
  DateText,
  LoginButton,
  HelloText,
} from "../../styles/MainPage.styles";

export default function HeaderBar() {
  // 실제 날짜는 나중에 동적으로 처리
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");

  return (
    <HeaderWrapper>
      <TopRow>
        <DateText>{today}</DateText>
        <LoginButton>로고자리?</LoginButton>
      </TopRow>
      <HelloText>임상현님 안녕하세요!</HelloText>
    </HeaderWrapper>
  );
}
