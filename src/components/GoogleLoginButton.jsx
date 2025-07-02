// components/GoogleLoginButton.jsx
import styled from "styled-components";

const GoogleButton = styled.button`
  user-select: none;
  appearance: none;
  background-color: white;
  border: 1px solid #747775;
  border-radius: 12px;
  box-sizing: border-box;
  color: #1f1f1f;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  height: 48px;
  width: 38vh;
  padding: 12px 32px;

  position: relative;
  text-align: center;
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:active:not(:disabled) .state {
    opacity: 0.1;
  }

  &:disabled {
    background-color: #ffffff61;
    border-color: #1f1f1f1f;
    cursor: default;
  }
`;

const ButtonState = styled.div.attrs({ className: "state" })`
  transition: opacity 0.218s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div.attrs({ className: "icon" })`
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin-right: 12px;
`;

const Contents = styled.span.attrs({ className: "contents" })`
  flex-grow: 1;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
`;

export default function GoogleLoginButton({ onClick }) {
  return (
    <GoogleButton onClick={onClick}>
      <ButtonState />
      <ContentWrapper>
        <IconWrapper>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            style={{ display: "block" }}
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
        </IconWrapper>
        <Contents>Google로 로그인</Contents>
        <span style={{ display: "none" }}>Sign in with Google</span>
      </ContentWrapper>
    </GoogleButton>
  );
}
