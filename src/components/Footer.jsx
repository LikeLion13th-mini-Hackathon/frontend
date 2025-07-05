import { useNavigate, useLocation } from "react-router-dom";
import {
  NavWrapper,
  NavItem,
  NavIcon,
  NavLabel,
} from "../styles/Footer.styles";
import { FaUser, FaRegCalendarCheck } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiMedal } from "react-icons/pi";

function Footer() {
  // 현재 탭 상태 관리 + 페이지 이동 처리
  const navigate = useNavigate();
  const location = useLocation();
  const menuList = [
    { icon: <GrHomeRounded />, label: "홈", path: "/mainpage" },
    { icon: <PiMedal />, label: "학점", path: "/gpa" },
    { icon: <RiGraduationCapLine />, label: "졸업요건", path: "/graduation" },
    { icon: <FaRegCalendarCheck />, label: "플래너", path: "/planner" },
    { icon: <FaUser />, label: "마이", path: "/mypage" },
  ];

  return (
    <NavWrapper>
      {menuList.map((menu) => (
        <NavItem
          key={menu.path}
          onClick={() => navigate(menu.path)}
          className={location.pathname === menu.path ? "active" : ""}
        >
          <NavIcon>{menu.icon}</NavIcon>
          <NavLabel>{menu.label}</NavLabel>
        </NavItem>
      ))}
    </NavWrapper>
  );
}

export default Footer;
