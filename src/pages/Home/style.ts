import styled from "styled-components";

export const HomePage = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 20vw;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 80px 10vw;
  }

  @media (max-width: 768px) {
    padding: 40px 8vw;
  }
`;
