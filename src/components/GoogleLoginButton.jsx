import styled from "styled-components";
import { Button } from "./Button";

const GoogleButton = styled(Button)`
  background-color: white;
  color: #1f1f1f;
  border: 1px solid #747775;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default function GoogleLoginButton({ onClick }) {
  return (
    <GoogleButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="20"
        height="20"
      >
        <path
          fill="#EA4335"
          d="M10 4.1c1.48 0 2.8.51 3.85 1.51l2.85-2.85C14.85 1.15 12.55 0.25 10 0.25 6.1 0.25 2.85 2.6 1.15 6l3.3 2.55C5.65 6.3 7.7 4.1 10 4.1z"
        />
        <path
          fill="#4285F4"
          d="M19.9 10.2c0-.65-.06-1.3-.15-1.9H10v3.75h5.45c-.25 1.2-1 2.2-2.1 2.85l3.3 2.55c1.95-1.8 3.2-4.45 3.2-7.25z"
        />
        <path
          fill="#FBBC05"
          d="M4.3 11.95c-.2-.6-.3-1.25-.3-1.95s.1-1.35.3-1.95L1.15 6C0.4 7.6 0 9.25 0 10.9s.4 3.3 1.15 4.9l3.15-2.45z"
        />
        <path
          fill="#34A853"
          d="M10 20c2.55 0 4.95-.85 6.6-2.3l-3.3-2.55c-.9.6-2.05.95-3.3.95-2.6 0-4.8-1.75-5.6-4.1l-3.3 2.55C2.85 17.4 6.1 20 10 20z"
        />
      </svg>
      <span>Google로 로그인</span>
    </GoogleButton>
  );
}
