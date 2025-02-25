import styled from "styled-components";
import { Title } from "../../style";

export const AboutPage = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 20vw;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 25vw;
      border-radius: 50%;
    }
  }

  ${Title} {
    font-size: 40px;
  }

  p {
    margin-top: 30px;
    font-size: 22px;
    letter-spacing: 1.5px;
  }
`;
