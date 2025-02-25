import styled from "styled-components";
import { Title } from "../../style";

export const AbilitiesPage = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 20vw;

  ${Title} {
    font-size: 40px;
    margin-bottom: 40px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 5.9vw;
  }
`;
