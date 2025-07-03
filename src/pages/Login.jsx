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
import Bee1 from "../assets/Bee1.png";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { ModalContent, ModalOverlay } from "../styles/LoginModal.styles";
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
      const res = await login(email, password); // 로그인 요청
      const { token, user } = res;

      localStorage.setItem("token", token); // 토큰 저장
      localStorage.setItem("user", JSON.stringify(user)); // 유저 정보 저장
      navigate("/mainpage"); // 성공 시 메인 이동
    } catch (error) {
      alert("로그인 실패! 아이디/비밀번호를 확인하세요.");
      console.error(error);
    }
  };

  return (
    <Container>
      <TitleSmall>나만의 대학생활 코디네이터</TitleSmall>
      <TitleMain>메인{"\n"}타이틀</TitleMain>

      <img
        src={Bee1}
        alt="로그인 이미지"
        style={{ width: "20vh", marginBottom: "5vh" }}
      />

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
            <h2 style={{ marginTop: "0" }}>이메일 로그인</h2>

            <div style={{ fontWeight: "bold" }}>아이디</div>
            <input
              type="email"
              placeholder="아이디를 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "2vh" }}
            />

            <div style={{ fontWeight: "bold" }}>비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
