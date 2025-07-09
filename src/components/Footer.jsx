import { useNavigate, useLocation } from "react-router-dom";
import {
  NavWrapper,
  NavItem,
  NavIcon,
  NavLabel,
} from "../styles/Footer.styles";
import HomeOn from "../assets/Icons/HomeOn.png";
import HomeOff from "../assets/Icons/HomeOff.png";
import GpaOn from "../assets/Icons/GpaOn.png";
import GpaOff from "../assets/Icons/GpaOff.png";
import GradOn from "../assets/Icons/GradOn.png";
import GradOff from "../assets/Icons/GradOff.png";
import PlanOn from "../assets/Icons/PlannerOn.png";
import PlanOff from "../assets/Icons/PlannerOff.png";
import MyOn from "../assets/Icons/MyOn.png";
import MyOff from "../assets/Icons/MyOff.png";

const menuList = [
  { iconOn: HomeOn, iconOff: HomeOff, label: "홈", path: "/mainpage" },
  { iconOn: GpaOn, iconOff: GpaOff, label: "학점", path: "/gpa" },
  { iconOn: GradOn, iconOff: GradOff, label: "졸업요건", path: "/graduation" },
  { iconOn: PlanOn, iconOff: PlanOff, label: "플래너", path: "/planner" },
  { iconOn: MyOn, iconOff: MyOff, label: "마이", path: "/mypage" },
];

function Footer({ activeLabel }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavWrapper>
      {menuList.map((menu) => {
        const isActive =
          activeLabel === menu.label || location.pathname === menu.path;

        return (
          <NavItem
            key={menu.path}
            onClick={() => navigate(menu.path)}
            className={isActive ? "active" : ""}
          >
            <NavIcon>
              <img
                src={isActive ? menu.iconOn : menu.iconOff}
                style={{
                  width: "3vh",
                  height: "3vh",
                  objectFit: "contain",
                }}
              />
            </NavIcon>
            <NavLabel>{menu.label}</NavLabel>
          </NavItem>
        );
      })}
    </NavWrapper>
  );
}

export default Footer;