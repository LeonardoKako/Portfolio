import styled from "styled-components";
import { Title } from "../../style";

export const AbilitiesPage = styled.section`
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
    margin-bottom: 40px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 5.9vw;

    @media (min-width: 769px) and (max-width: 1024px) {
      gap: 6vw;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8vw;
    }
  }
`;
