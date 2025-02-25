import styled from "styled-components";
import { Title } from "../../style";

export const ProjectsPage = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 20vw;

  ${Title} {
    font-size: 40px;

    &:last-of-type {
      margin-top: 80px;
    }
  }
`;
