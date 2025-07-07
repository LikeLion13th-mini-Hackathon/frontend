import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import {
  Container,
  TitleSmall,
  LoginButton,
  SignupLink,
} from "../styles/Login.styles";
import Bee1 from "../assets/Bee1.png";
import MainLogo from "../assets/MainLogo.png";
import GoogleLoginButton from "../components/GoogleLoginButton";
import {
  ModalContent,
  ModalOverlay,
  ModalInput,
} from "../styles/LoginModal.styles";
import { login } from "../api/auth";

function Login() {
  // 모달창, 로그인 입력 여부 관리
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 로그인 API 연동
  const handleSubmit = async () => {
    try {
      const res = await login(email, password); // API 호출
      const { token, user } = res;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/mainpage"); // 로그인 성공 시 이동
    } catch (error) {
      alert("로그인 실패! 아이디/비밀번호를 확인하세요.");
      console.error("로그인 에러:", error);
    }
  };

  return (
    <Container>
      <img src={MainLogo} alt="로그인 이미지" style={{ width: "18vh" }} />
      <TitleSmall>나만의 대학생활 코디네이터</TitleSmall>
      <img
        src={Bee1}
        alt="로그인 이미지"
        style={{ width: "20vh", marginBottom: "5vh" }}
      />

      <GoogleLoginButton></GoogleLoginButton>
      <LoginButton onClick={() => setShowModal(true)}>
        <MdOutlineEmail size={22} style={{ marginRight: "4vw" }} />
        이메일로 로그인
      </LoginButton>

      <SignupLink to="/signup">회원 가입하기</SignupLink>

      {/* 상세로그인 (모달창) */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: "0" }}>이메일 로그인</h2>

            <div style={{ fontWeight: "bold" }}>아이디</div>
            <ModalInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="아이디를 입력해주세요"
            />

            <div style={{ fontWeight: "bold" }}>비밀번호</div>
            <ModalInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
            />

            <button onClick={handleSubmit} disabled={!email || !password}>
              로그인
            </button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default Login;
