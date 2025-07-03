import React from "react";
import {
  NavWrapper,
  NavItem,
  NavIcon,
  NavLabel,
} from "../styles/Footer.styles";
import {
  FaHome,
  FaGraduationCap,
  FaClipboardList,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

function Footer() {
  return (
    <NavWrapper>
      <NavItem>
        <NavIcon>
          <FaHome />
        </NavIcon>
        <NavLabel>홈</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon>
          <FaGraduationCap />
        </NavIcon>
        <NavLabel>학점</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon>
          <FaClipboardList />
        </NavIcon>
        <NavLabel>졸업요건</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon>
          <FaCalendarAlt />
        </NavIcon>
        <NavLabel>플래너</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon>
          <FaUser />
        </NavIcon>
        <NavLabel>마이</NavLabel>
      </NavItem>
    </NavWrapper>
  );
}

export default Footer;
