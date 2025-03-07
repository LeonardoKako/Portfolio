import styled from "styled-components";
import { Title } from "../../style";

export const AboutPage = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 20vw;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 80px 10vw;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 25vw;
      height: 25vw;
      border-radius: 50%;

      @media (min-width: 768px) and (max-width: 1024px) {
        width: 40vw;
        height: 40vw;
      }
    }
  }

  ${Title} {
    font-size: 40px;
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-top: 50px;
    }
  }

  p {
    margin-top: 30px;
    font-size: 20px;
    letter-spacing: 1.5px;
  }
`;
