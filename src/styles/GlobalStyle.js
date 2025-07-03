import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Pretendard', sans-serif;
    background-color: #f9f9f9;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
