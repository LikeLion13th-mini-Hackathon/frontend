import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TitleSmall,
  TitleMain,
  LoginButton,
  Signup,
  SignupLink,
} from "../styles/Login.styles";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { ModalContent, ModalOverlay } from "../components/LoginModal";

function Login() {
  // 스크롤 금지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 페이지 이동 관리
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/상세로그인페이지");
  };

  // 모달창, 로그인 입력 여부 관리
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <TitleSmall>나만의 대학생활 코디네이터</TitleSmall>
      <TitleMain>메인{"\n"}타이틀</TitleMain>
      <GoogleLoginButton></GoogleLoginButton>
      <LoginButton onClick={() => setShowModal(true)}>
        이메일로 로그인
      </LoginButton>
      <Signup>
        계정이 없으신가요?
        <SignupLink to="/signup">회원가입</SignupLink>
      </Signup>

      {/* 상세로그인 (모달창) */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>이메일 로그인</h2>

            <div style={{ fontWeight: "bold" }}>아이디</div>
            <input type="email" placeholder="아이디를 입력해주세요" />

            <div style={{ fontWeight: "bold" }}>비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button disabled={!email && !password}>로그인</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default Login;
