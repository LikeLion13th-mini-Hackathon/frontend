import React from "react";
import {
  HeaderWrapper,
  TopRow,
  DateText,
  HelloText,
} from "../../styles/MainPage.styles";

function HeaderBar() {
  // 실제 날짜는 나중에 동적으로 처리
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");

  return (
    <HeaderWrapper>
      <TopRow>
        <DateText>{today}</DateText>
      </TopRow>
      <HelloText>임상현님, 안녕하세요!</HelloText>
    </HeaderWrapper>
  );
}

export default HeaderBar;
