import styled from "styled-components";
import { Title } from "../../style";

export const ProjectsPage = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 20vw;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 80px 10vw;
  }

  @media (max-width: 768px) {
    padding: 40px 8vw;
  }

  ${Title} {
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    &:last-of-type {
      margin-top: 80px;
    }
  }
`;
