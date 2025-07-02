import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 420px;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 16px;
  background-color: #fff;

  @media (min-width: 768px) {
    max-width: 640px;
    padding: 24px;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    padding: 32px;
  }
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;